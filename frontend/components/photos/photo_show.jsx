import React from 'react';
import { Link } from 'react-router-dom';
import CommentForm from './comment_form';

class PhotoShow extends React.Component {
  componentDidMount() {
    this.props.fetchPhoto(this.props.match.params.photoId);
  }

  // componentWillReceiveProps(nextProps) {
  //   if (this.props.photo.id !== nextProps.match.params.photoId) {
  //     this.props.fetchPhoto(nextProps.match.params.photoId);
  //   }
  // }

  render() {
    console.log(this.props);
    return (
      this.props.photo && this.props.user ?
        <div className="photo-container">
          <img src={this.props.photo.img_url} className="photo-show"/>
          <div className="change-photo-container">
            <Link to={`/photos/${this.props.photo.id}/edit`}>
              <img src="https://www.iconsdb.com/icons/preview/white/edit-xxl.png" className="edit-photo"/>
            </Link>
            <img src="https://www.iconsdb.com/icons/preview/white/delete-xxl.png"
            onClick={() => this.props.deletePhoto(this.props.match.params.photoId)
              .then(() => this.props.history.push('/photos'))}
            className="delete-photo" />
          </div>
          <div className="photo-show-wrapper">
            <div className="photo-show-container">
              <h3 className="photo-show-profile">
                <img src={this.props.user.img_url} className="photo-show-profile-pic"/>
                {this.props.user.first_name}
              </h3>
              <br/>
              <p className="photo-show-title">{this.props.photo.title}</p>
              <br/>
              <p className="photo-show-description">{this.props.photo.description}</p>
              <br/>
              <Link to='/photos' className="photo-show-index-link">Photo Index</Link>
              <br/>
              <br/>
            </div>
          </div>
          <ul className="comments">
            {this.props.comments.map(comment =>
              <li>{comment.body}</li>
            )}
          </ul>
          {/* <CommentForm /> */}
        </div>
      : null
    );
  }
}

export default PhotoShow;