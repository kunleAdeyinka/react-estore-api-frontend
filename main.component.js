// component that decides which main component to load: read or create/update
var App = React.createClass({
	//initial mode is 'read' mode
	getInitialState(){
		return {
			currentMode: 'read',
			productId: null
		};
	},
	
	//used when user clicks on something that changes the current mode
	changeAppMode(newMode, productId){
		this.setState({currentMode: newMode});
		if(productId !== undefined){
			this.setState({productId: productId});
		}
	},
	
	//render the component based on the current mode
	render(){
		var modeComponent = <ReadProductsComponent changeAppMode={this.changeAppMode} />;
		
		switch(this.state.currentMode){
			case 'read':
                break;
            case 'readOne':
                modeComponent = <ReadOneProductComponent productId={this.state.productId} changeAppMode={this.changeAppMode}/>;
                break;
            case 'create':
                modeComponent = <CreateProductComponent changeAppMode={this.changeAppMode}/>;
                break;
            case 'update':
                modeComponent = <UpdateProductComponent productId={this.state.productId} changeAppMode={this.changeAppMode}/>;
                break;
            case 'delete':
                modeComponent = <DeleteProductComponent productId={this.state.productId} changeAppMode={this.changeAppMode}/>;
                break;
            default:
                break;
		}
		
		return modeComponent;
	}
});

ReactDOM.render(
    <App />,
    document.getElementById('content')
);