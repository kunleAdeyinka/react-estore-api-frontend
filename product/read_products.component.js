//This component will hold the product recots using a HTML table.
window.ReadProductsComponent = React.createClass({
  getInitialState(){
    return {
      products: []
    };
  },

  //on mounting, fethc all products and store them in the component's state
  componentDidMount(){
    this.serverRequest = $.get("http://localhost/estoreapi/product/read.php", (products) => {
      this.setState({products: products.records});
    }.bind(this));
  },

  //on unmount kill product fetching in case the request is still pending
  comonentWillUnmount(){
    this.serverRequest.abort();
  },

  //render comonent on the page
  render(){
    var productList = this.state.products;
    $('.page-header h1').text('Read Products');

    return (
      <div className='overflow-hidden'>
        <TopActionsComponent changeAppMode={this.props.changeAppMode} />
        <ProductsTable products={productList} changeAppMode={this.props.changeAppMode} />
      </div>
    );
  }
});
