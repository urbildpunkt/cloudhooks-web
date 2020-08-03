---
description: ''
sidebar: 'docs'
prev: '/docs/actions/'
---

# Examples

## Email me when a refund is requested

Use this hook to find out when some customer support is needed! This is a great opportunity to reach out and change an unhappy customer to a loyal one.

> The `refundMinimum` variable is useful for setting a dollar amount, over which, you want to be notified for a given refund. Default is $0, so you will receive an email for every refund.

```js
module.exports = async (refund, actions, { shopUrl }) => {

  // Adjust these variables to customize
  const refundMinimum = 0
  const to = 'you@yourshop.com'
  const subject = `(${shopUrl}) Refund requested`
  const body = `<p>
    Please review the following refund: 
    <a href="${shopUrl}/admin/orders/${refund.order_id}">${refund.order_id}</a>
  </p>`

  const totalRefundAmount = refund.refund_line_items.reduce((total, item) => {
    return total + parseInt(item.subtotal)
  }, 0)

  if (totalRefundAmount > refundMinimum) {
    await actions.email.send({ to, subject, body })
  } 
}
```

## Reminder to thank big spenders

Use this hook as a reminder to personally thank a customer who has made a big purchase. The customer will also be tagged so that you can keep track of and build stronger relationships with your best customers.

> The `minimumPurchase` variable is useful for setting a dollar amount, over which, you want to be notified about the order.

```js
module.exports = async (order, actions, { shopUrl }) => {

  // Adjust these variables to customize
  const minimumPurchase = 100 // in dollars
  const tag = 'big-spender'
  const to = 'you@yourshop.com'
  const subject = `(${shopUrl}) Large order created`
  const body = `<p>
    ${order.customer.email} just made a large order of $${order.total_price}. 
    <br>
    Maybe you want to thank them personally? 
    <br>
    Order: <a href="${shopUrl}/admin/orders/${order.id}">${refund.order_id}</a>
  </p>`

  if (parseInt(order.total_price) > minimumPurchase) {
    await actions.shopify.tagCustomer(order.customer.id, tag)
    await actions.email.send({ to, subject, body })
  }
}
```