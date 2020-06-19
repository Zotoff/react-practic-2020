import React, { Component } from 'react';
import Modal from 'react-modal';

export default class TeamsModal extends Component {
    constructor(props) {
        super();
        this.state = {
            showModal: false
        }

        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }

    handleOpenModal(){
        this.setState({showModal: true})
    }

    handleCloseModal(){
        this.props.clearModal();
        this.setState({showModal: false})
    }

    // componentWillReceiveProps(nextprops){
    //     console.log(nextprops);
    //     // if(nextprops.team !== null) {
    //     //     this.setState({showModal: true})
    //     // }
    // }

    static getDerivedStateFromProps(props, state){
        if(props.team !== null){
            return {
                showModal: true
            }
        }
        return null
    }

    render() {
        return (
            <>
                <Modal
                    isOpen={this.state.showModal}
                    ariaHideApp={false}
                >
                    <button onClick={this.handleCloseModal}>Close Modal</button>
                {
                    this.props.team ?
                    <div>
                        <h3>{this.props.team.name}</h3>
                        <hr />
                        <div 
                        dangerouslySetInnerHTML={{
                            __html: this.props.team.content
                        }}
                        className="modal_content">

                        </div>
                    </div>
                    :null
                }
                </Modal>
            </>
        )
    }
}
