---
description: ''
sidebar: 'docs'
next: '/docs/actions/'
---

# Introduction

## Creating a hook

Creating a hook is simple. You just select a trigger event (webhook), then define the code you want to run in a handler function.

Handler functions are defined like this:

```js
module.exports = function(payload, actions) {

}
```

The `payload` is whatever data is sent by the triggering webhook.

The `actions` object contains the functions you can call to trigger API requests, HTTP requests, send email, etc. 

For example, if we wanted to send an email to ourselves celebrating whenever a new user signs up:

```js
module.exports = function(payload, actions) {
  return actions.email.send({
    to: 'ourselves@example.com',
    body: 'WOW, we got a new customer: ' + payload.first_name + ' ' + payload.last_name
  })
}
```

Notice how we return the action call. This is because actions return a promise, and if we use those promises to coordinate several asynchronous things, then by returning a promise that only resolves when our code is finished, we can ensure that the system doesn't quite early.

You can read more about promises, as well as everything else javascript related, in [Mozilla's developer documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises).



## Pricing

Each call to an action will result in a charge of $0.01. Some "shortcut" actions might actually cost more than $0.01 if they internally call additional actions in order to complete.