window.ProductsTable = React.createClass({
  render(){
    var rows = this.props.products.map((product, i) => {
      return (<ProductRow key={i} product={product} changeAppMode={this.props.changeAppMode} />);
    }.bind(this));

    return (
      !rows.length
           ? <div className="alert alert-danger">No Products Found.</div>
           : <table className='table table-bordered table-hover'>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>Category</th>
                    <th className="adjustActionColumn">Action</th>
                  </tr>
              </thead>
              <tbody>
                {rows}
              </tbody>
            </table>

    );
  }
});
