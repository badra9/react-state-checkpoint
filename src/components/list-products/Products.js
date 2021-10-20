import React, {useState} from 'react';
import data from '../../data/data';
import './Products.css';

class ListProducts extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data: data,
            findArticle: ''
        }
    }

    handleChange = (e) => {
        this.setState({findArticle: e.target.value});
    }

    filteredArticles = () => {
        return this.state.data.filter(elt => elt.description.toLowerCase().includes(this.state.findArticle .toLowerCase()));
    } 



    render(){
        return <div>
                    <div className="global-container">
                        <div>
                            <h1 className="title">Articles</h1>
                            <input name="filter" type="search" value={this.state.findArticle} onChange={this.handleChange} />
                        </div>
                        <div className="container">
                            <div className="card-container">
                                {this.filteredArticles().
                                map(elt => 
                                    <div key={elt.id} className="card">
                                        <div className="img-container">
                                            <img className="img-respensive" src={elt.img} alt={elt.description} />
                                        </div>
                                        <div className="card-icons">
                                            <div className="like-product">
                                                <i className="fas fa-heart"></i>
                                            </div>
                                            <div className="add-to-cart">
                                                <i className="fas fa-shopping-cart"></i>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
    }
}
export default ListProducts