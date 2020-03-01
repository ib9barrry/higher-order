import React , {Component} from 'react';

const countHits = (WrappedComponent) => {

    class CountHits extends Component {
        
        state = {
            hits : 0
          }
      
          addOne = ()=> {
            this.setState( (prevState)=>{
              return {
                hits: prevState.hits +1 
              }
            } )
          }

        render()
        {
            return <WrappedComponent stateFonc={this.state} addOne={this.addOne}  {... this.props} />
        }
    }
    
    return CountHits;
}

export default countHits;