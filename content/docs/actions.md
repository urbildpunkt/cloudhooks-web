---
description: ''
sidebar: 'docs'
prev: '/docs/'
next: '/docs/examples/'
---

# Actions

Actions allow you to trigger API requests, HTTP requests, send email, etc.


## shopify.get(url: string)

Send `GET` request to Shopify API - [View Docs](https://shopify.dev/docs/admin-api/rest/reference)


Example:
```js
actions.shopify.get("/admin/api/2020-04/products.json")
```


## shopify.post(url: string, object)

Send `POST` request to Shopify API - [View Docs](https://shopify.dev/docs/admin-api/rest/reference)

Example:
```js
actions.shopify.post("/admin/api/2020-04/products.json", {
    product: {
      title: "Burton Custom Freestyle 151",
      body_html: "<strong>Good snowboard!</strong>",
      vendor: "Burton",
      product_type: "Snowboard",
      tags: "Barnes & Noble, John's Fav, Big Air"
    }
  })
```


## shopify.put(url: string, data: object)

Send `PUT` request to Shopify API - [View Docs](https://shopify.dev/docs/admin-api/rest/reference)

Example:
```js
actions.shopify.put("/admin/api/2020-04/products/632910392.json", {
  "product": {
    id: 632910392,
    published: true
  }
})
```


## shopify.delete(url: string)

Send `DELETE` request to Shopify API - [View Docs](https://shopify.dev/docs/admin-api/rest/reference)

Example:
```js
actions.shopify.delete("/admin/api/2020-04/products/12345.json")
```


## shopify.graphql(query: string)

Send `GraphQL` request to Shopify API - [View Docs](https://shopify.dev/docs/admin-api/rest/reference)

Example:
```js
actions.shopify.graphql(`query { shop { name } }`)
```


## shopify.tagCustomer(customerId: string, tag: string)

Shortcut for adding a tag to a customer. 

Example:
```js
actions.shopify.tagCustomer("12345", "tag d")
```

**Note:** Counts as 2 actions, as the customer must be fetched before being tagged.


## shopify.tagOrder(orderId: string, tag: string)

Shortcut for adding a tag to an order. 

Example:
```js
actions.shopify.tagOrder("12345", "tag d")
```

**Note:** Counts as 2 actions, as the order must be fetched before being tagged.


## pg.query(connectionOptions: string | object, query: string, params?: []any)

Exposes the 'pg' library. The first argument is the connection string or object, but the following arguments conform to the libraries 'query' method. 

Example:
```js
return actions.pg.query(
  process.env.DATABASE_URL,
  'insert into test_orders (total) values ($1)', 
  [ payload.total_price ]
)
```

For more, see the [node-postgres documentation](https://node-postgres.com/)


## http.get(url: string, config?: object)

Send a `GET` request to any URL.

Example:
```js
actions.http.get('http://my.api.com/thing/1')
  .then({ data }) => {
    console.log('do something with thing 1', data)
  })
```

For more, see the [Axios docs](https://github.com/axios/axios).


## http.post(url: string, data: any, config?: object)

Send a `POST` request to any URL.

Example:
```js
actions.http.post('http://my.api.com/things', { a: 1 })
  .then({ data }) => {
    console.log('created a thing: { a: 1 }')
  })
  ```

For more, see the [Axios docs](https://github.com/axios/axios).


## http.put(url: string, data: any, config?: object)

Send a `PUT` request to any URL.

Example:
```js
actions.http.put('http://my.api.com/things/1', { a: 1 })
  .then({ data }) => {
    console.log('updated a thing with { a: 1 }')
  })
```
For more, see the [Axios docs](https://github.com/axios/axios).


## http.delete(url: string, config?: object)

Send a `DELETE` request to any URL.

Example:
```js
actions.http.delete('http://my.api.com/things', { a: 1 })
  .then({ data }) => {
    console.log('created a thing: { a: 1 }')
  })
```

For more, see the [Axios docs](https://github.com/axios/axios).


## email.send(config: object)

Send an email with either HTML or plain text.

Example:
```js
actions.emails.send({
  to: 'john@example.com',
  cc: [ 'sally@example.com', 'bob@example.com' ],
  subject: 'Just a note',
  body: `
    <h3>Hi!</h3>
    <p>Let me know what you think about ${customer.email}.</p>
  `
})
```

**Note:** Optionally, `sendAt:` can be set to delay delivery until a specific time. Must be a UTC string (eg: `myDate.toUTCString()`).