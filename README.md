# Middleware test
This simple mini-app was made in order to understand how an api and its client-side application connects itself

## Setup
* git clone git@github.com:gkpacker/middleware-test.git
* cd middleware-test
* bundle install
* yarn install
* rake db:create
* rake db:migrate
* rake db:seed
* bundle exec rails server
* webpack-dev-server

## Usage
Once you're ready to go, open your browser console and call REST commands through it:

### Posts
Index
```js
posts.all(success, fail)
// success and fail callbacks are optional
```

Show
```js
// posts.one(id, success, fail)
// success and fail callbacks are optional

posts.one(1)
```

Create
```js
// posts.create(data, success, fail)
// success and fail callbacks are optional
// data should have a title and a content

posts.create({ title: 'insert some title here', content: 'wow, such content'})
// it will return the created object
```

Update
```js
// posts.update(id, data, success, fail)
// success and fail callbacks are optional
// get your recently created post id and use it here

posts.update(111, { title: 'new title', content: 'other content'})
```

Delete
```js
// posts.delete(id, success, fail)
// success and fail callbacks are optional
// get your recently update post id and use it here

posts.delete(111)
```

### Comments
Index
```js
// success and fail callbacks are optional
// comments(postId).all(success, fail)
// comments needs the postId they're refered to

comments(1).all()
```

Show
```js
// comments(postId).one(id, success, fail)
// success and fail callbacks are optional

comments(1).one(1)
```

Create
```js
// comments(postId).create(data, success, fail)
// success and fail callbacks are optional
// data should have a title and a content

comments(23).create({ title: 'insert some title here', content: 'wow, such content'})

// it will return the created object
```

Update
```js
// comments(postId).create(id, data, success, fail)
// success and fail callbacks are optional
// get your recently created comment id and use it here

comments(23).update({ title: 'insert some title here', content: 'wow, such content'})
```

Delete
```js
// comments(postId).delete(id, success, fail)
// success and fail callbacks are optional

comments(1).delete(1)
```
