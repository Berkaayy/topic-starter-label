import {extend} from 'flarum/extend';
import app from 'flarum/app';
import PostUser from 'flarum/components/PostUser';

function checkFP(post) {
  const firstPost = post.discussion().firstPost();
  if (firstPost) {
    return (firstPost.id() !== post.id());
  } else {
    return true;
  }
}

app.initializers.add('dem13n-topic-starter-label', () => {

  extend(PostUser.prototype, 'view', function (vnode) {

    const routeName = app.current.get('routeName');

    if (routeName === 'discussion' || routeName === 'discussion.near' || routeName === 'blogArticle') {

      const labelText = (routeName === 'blogArticle') ? app.translator.trans('dem13n.forum.blog_article_author') : app.translator.trans('dem13n.forum.topic_starter');
      const post = this.attrs.post;
      const postAuthor = post.user().id();
      const discussionAuthor = post.discussion().user().id();

      if (!discussionAuthor && !postAuthor) {
        return;
      }

      if (postAuthor === discussionAuthor && checkFP(post)) {
        vnode.children.push(
          <span className="topicStarter">{labelText}</span>
        );
      }
    }
  });
});
