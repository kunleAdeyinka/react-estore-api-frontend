// this component contains the logic to read in one product
window.ReadOneProductComponent = React.createClass({
    getInitialState(){
      return{
        id: 0,
        name: '',
        description: '',
        price: 0,
        category_name: ''
      };
    },

    //on mounting, read the product data and then add it to the component's state
    componentDidMount(){
      var productId = this.props.productId;

      this.serverRequestProduct = $.get("http://localhost/estoreapi/product/read_one.php?id=" + productId,
          function(product){
            this.setState({
              id: product.id,
              name: product.name,
              description: product.description,
              price: product.price,
              category_name: product.category_name
            });
          }.bind(this));

      $('.page-header h1').text('Read Product');
    },

    //when unmounting the comonent, kill fetching of categories in case the request is still running
    componentWillUnmount(){
      this.serverRequestProduct.abort();
    },

    //render the html for the component
    render: function() {

        return (
            <div>
                <a href='#' onClick={() => this.props.changeAppMode('read')} className='btn btn-primary margin-bottom-1em'>
                    Read Products
                </a>

                <form onSubmit={this.onSave}>
                    <table className='table table-bordered table-hover'>
                        <tbody>
                            <tr>
                                <td>Name</td>
                                <td>{this.state.name}</td>
                            </tr>

                            <tr>
                                <td>Description</td>
                                <td>{this.state.description}</td>
                            </tr>

                            <tr>
                                <td>Price ($)</td>
                                <td>${parseFloat(this.state.price).toFixed(2)}</td>
                            </tr>

                            <tr>
                                <td>Category</td>
                                <td>{this.state.category_name}</td>
                            </tr>

                        </tbody>
                    </table>
                </form>
            </div>
        );
    }
});
