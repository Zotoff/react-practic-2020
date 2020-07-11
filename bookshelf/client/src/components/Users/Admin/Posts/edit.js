import React, {Component} from 'react';
import {Formik} from 'formik';
import {Link} from 'react-router-dom';
import AdminLayout from '../../../../hoc/adminLayout';

import {BookSchema, FormElement} from './utils/helper';

import {EditorState, ContentState} from 'draft-js';
import htmlToDraft from 'html-to-draftjs';
import {stateToHTML} from 'draft-js-export-html';
import {Editor} from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';


import {connect} from 'react-redux';
import {editBook, clearBook, getBook} from '../../../../store/actions/book_actions';


class EditPost extends Component {
    state={
        editorState: '',
        editorContentHtml: '',
        success: false,
        loading: true,
        bookToEdit: {}
    }

    onEditorStateChange = (editorState)=>{
        this.setState({
            editorState
        })
    }

    onEditBook = (values) => {
        this.props.dispatch(editBook(values))
    }

    componentDidUpdate(prevProps){
        // compare the props with previous props to locate the changes
        const hasChanged = this.props.books.single !== prevProps.books.single;
        const hasUpdated = this.props.books.uodate !== prevProps.books.update;
        const single = this.props.books.single;
        if(hasUpdated){
            this.setState({success: true})
        }
        if(hasChanged){
            if(single !== false) {
                const blocksFromHtml = htmlToDraft(single.content);
                const {contentBlocks, entityMap} = blocksFromHtml;
                const contentState = ContentState.createFromBlockArray(contentBlocks, entityMap);
    
                this.setState({
                    loading: false,
                    editorState: EditorState.createWithContent(contentState),
                    bookToEdit:{
                        id: single._id,
                        name: single.name,
                        author: single.author,
                        price: single.price,
                        pages: single.pages,
                        rating: single.rating
                    }
                })
            } else {
                this.props.history.push('/')
            }

            
        }
    }

    componentWillUnmount(){
        this.props.dispatch(clearBook())
    }

    componentDidMount(){
        // grab the id from the router
        this.props.dispatch(getBook(this.props.match.params.id));
    }
    
    render(){
        return this.state.loading ? 
            <>Loading...</>        
        :
            <>
                <AdminLayout>
                    <h4>Add a post</h4>
                    <Formik
                        enableReinitialize = {true}
                        initialValues = {this.state.bookToEdit}
                        validationSchema={BookSchema}
                        onSubmit = {(values, {resetForm})=>{
                            this.onEditBook({
                                ...values,
                                content: stateToHTML(this.state.editorState.getCurrentContent())
                            })
                        }}
                    >
                        {({
                            values,
                            errors,
                            touched,
                            handleChange,
                            handleBlur,
                            handleSubmit
                        })=>(
                            <form onSubmit={handleSubmit}>
                                <input type="hidden" name="_id" value={values._id}/>

                                <FormElement 
                                    elData={
                                        {
                                            element: 'input',
                                            type: 'text',
                                            value: values.name,
                                        }                                       
                                    }
                                     placeholder='The title of the book'
                                     name='name'
                                     onHandleChange={(e)=>{handleChange(e)}}
                                     onHandleBlur={(e)=>{handleBlur(e)}}
                                     errors={errors.name}
                                     touched={touched.name}
                                />

                                <Editor 
                                    editorState={this.state.editorState}
                                    wrapperClassName="demo-wrapper"
                                    editorClassName="demo-editor"
                                    onEditorStateChange={this.onEditorStateChange}
                                />

                                <hr />
                                <h4>Book info</h4>
                                <FormElement 
                                    elData={
                                        {
                                            element: 'input',
                                            type: 'text',
                                            value: values.author,
                                        }                                       
                                    }
                                     placeholder='The author of the book'
                                     name='author'
                                     onHandleChange={(e)=>{handleChange(e)}}
                                     onHandleBlur={(e)=>{handleBlur(e)}}
                                     errors={errors.author}
                                     touched={touched.author}
                                />
                                <FormElement 
                                    elData={
                                        {
                                            element: 'input',
                                            type: 'number',
                                            value: values.pages,
                                        }                                       
                                    }
                                     placeholder='How much pages?'
                                     name='pages'
                                     onHandleChange={(e)=>{handleChange(e)}}
                                     onHandleBlur={(e)=>{handleBlur(e)}}
                                     errors={errors.pages}
                                     touched={touched.pages}
                                />
                                <FormElement 
                                    elData={
                                        {
                                            element: 'input',
                                            type: 'number',
                                            value: values.price,
                                        }                                       
                                    }
                                     placeholder='The price of the book'
                                     name='price'
                                     onHandleChange={(e)=>{handleChange(e)}}
                                     onHandleBlur={(e)=>{handleBlur(e)}}
                                     errors={errors.price}
                                     touched={touched.price}
                                />
                                <FormElement 
                                    elData={
                                        {
                                            element: 'select',
                                            value: values.rating,
                                        }                                       
                                    }
                                     name='rating'
                                     onHandleChange={(e)=>{handleChange(e)}}
                                     onHandleBlur={(e)=>{handleBlur(e)}}
                                     errors={errors.rating}
                                     touched={touched.rating}
                                >
                                    <option default>Select rating</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </FormElement>
                                <button type="submit">Add book</button>
                                <br />
                                {
                                    this.state.success ?
                                        <div className="succes_entry">
                                            <div>Update completed</div>
                                            <Link to={`/article/${this.props.books.update.doc._id}`} >See your book</Link>
                                        </div>
                                    :null
                                }
                            </form>
                        )}
                    </Formik>
                </AdminLayout>
            </>
    }
}

function mapStateToProps(state) {
    return {
        books: state.books
    }
}

export default connect(mapStateToProps)(EditPost);