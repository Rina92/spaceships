import React, {Component} from 'react';
import Cardlist from './Cardlist';
import { ReactComponent as Refresh} from './refresh.svg' ;
import axios from 'axios';

class Navigation extends Component {
    constructor() {
        super()
        this.state = {
            data: [],
            originalData: []
        };

        this.handleLandSuccessChange = this.handleLandSuccessChange.bind(this);
        this.handleReusedChange = this.handleReusedChange.bind(this);
        this.handleWithChange = this.handleWithChange.bind(this);
        this.handleFiltering = this.handleFiltering.bind(this);
        this.refreshChange = this.refreshChange.bind(this);
      }
      render (){
        return (
        <div className='centered'>
          <div >
            <div className='dt dt--fixed nav' >
                <div className=' fl w-40 '>
                    <Refresh  className='refresh ma2 '  onClick={this.refreshChange}/>
                </div>
                <div className=' fl w-20 small '>
                    <input  type='checkbox' className=' mv3 ' id='checkbox' ref='cbLandSuccess' onChange={this.handleLandSuccessChange} /> <p className='white dib mv3 '> LAND SUCCESS</p>
                </div>
                <div className='fl w-20 small '>
                    <input  type='checkbox' className=' mv3 ' id='checkbox' ref='cbReused' onChange={this.handleReusedChange} /> <p className='white dib mv3'> REUSED</p>
                </div>
                <div className='fl w-10 small '>
                    <input  type='checkbox' className=' mv3 ' id='checkbox' ref='cbWithReddit' onChange={this.handleWithChange} /> <p className='white dib mv3 '> WITH REDDIT</p>
                </div>
            </div>
            <div >
                <div className='bg-white medi fl w-10 pa2 b'>Badge</div>
                <div className='bg-white medi fl w-10 pv2 b'>Rocket Name</div>
                <div className='bg-white medi fl w-10 pv2 pl2 b'>Rocket Type</div>
                <div className='bg-white medi fl w-10 pv2 pl2 b'>Launch Date</div>
                <div className='bg-white medi fl w-40 pa2 pl2 b'>Details</div>
                <div className='bg-white medi fl w-10 pa2 b'>ID</div>
                <div className='bg-white medi fl w-10 pa2 b'>Article</div>
                
            </div>

          </div>
          <br></br>
          <br></br>
            <Cardlist data = {this.state.data} />
          
          </div>
          );
      }

    componentDidMount() {
        var self = this;
        axios.get('https://spaceshipapi.herokuapp.com')
            .then(function(res) {
                self.setState(
                    { data: res.data,  originalData: res.data}
                );
            });
    }

    refreshChange() {
        this.handleFiltering(false,false,false);
        document.getElementById('checkbox').checked = false;
    }
    handleLandSuccessChange(event) {
        this.handleFiltering(this.refs.cbLandSuccess.checked, this.refs.cbReused.checked, this.refs.cbWithReddit.checked);
    }
    handleReusedChange(event) {
        this.handleFiltering(this.refs.cbLandSuccess.checked, this.refs.cbReused.checked, this.refs.cbWithReddit.checked);
    }

    handleWithChange(event) {
        this.handleFiltering(this.refs.cbLandSuccess.checked, this.refs.cbReused.checked, this.refs.cbWithReddit.checked);
    }

    handleFiltering(landSuccess, reused, withReddit) {
        const listFilteredByReddit = this.filterDataWith(this.state.originalData, landSuccess, reused, withReddit);
        this.setState({ data: listFilteredByReddit });
    }

    filterDataWith(data, landSuccess, reused, withReddit) {
        var listFilteredByLandSuccess = data.filter(function(item) {
            if (landSuccess) {
                return item.rocket && item.rocket.first_stage && item.rocket.first_stage.cores.length > 0 && item.rocket.first_stage.cores[0].land_success === landSuccess;
            }
            
            return true;
        });

        var listFilteredByReused = listFilteredByLandSuccess.filter(function(item) {
            if (reused) {
                return item.rocket && item.rocket.first_stage && item.rocket.first_stage.cores.length > 0 && item.rocket.first_stage.cores[0].reused === reused;
            }
            
            return true;
        });

        return listFilteredByReused.filter(function(item) {
            if (withReddit) {
                if (item.links.reddit_media) {
                    return true;
                }
                
                return false;
            }
            
            return true;
        });
    }
}

export default Navigation;