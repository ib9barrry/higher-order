import React , {Component} from 'react';
import vegeta from './vegeta.png';
import countHits from './countHits';

class Vegeta extends Component {

    render(){
        const { stateFonc , addOne , name , life  } = this.props

        return (
            <div className="col-md-6">
              <img className="img-fluid img-thumbnail " src={vegeta} alt="Vegeta" />
              <br />
              <button onClick={addOne} className='btn btn-success' style={{ marginTop: '40px' }}> {name} Frappe</button>
              <table className="table table-striped">
                <thead>
                  <tr>  
                    <td> Coups </td>
                    <td> Vie </td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td> {stateFonc.hits} </td>
                    <td> {life} % </td>
                  </tr>
                </tbody>
              </table>
            </div>
          )
        }
}

export default countHits(Vegeta);