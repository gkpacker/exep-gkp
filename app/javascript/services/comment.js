import RestService from './rest'

export default class CommentService extends RestService {
  constructor(postId){
    super();
    this.url = `/posts/${postId}/comments`
  }
}
