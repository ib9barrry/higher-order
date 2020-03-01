import React , {Component} from 'react';
import goku from './goku.png';
import countHits from './countHits';

class Goku extends Component {

    render(){
      const { stateFonc , addOne , name , life } = this.props

        return (
            <div className="col-md-6">
              <img className="img-fluid img-thumbnail" src={goku} alt="Goku" />
              <br />
              <button  onClick={addOne} className='btn btn-success'> {name} Frappe</button>
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

export default countHits(Goku);