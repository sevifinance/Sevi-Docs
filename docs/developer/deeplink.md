# Deeplink

if you need to use the Sevi as payment option for customers directly on web or mobile it's possible to have a smooth integration between your system and Sevi via deeplinks.

To initate a payment for Sevi, use the following format

```
https://p.sevi.io/{orderReference}?redirect={redirectURL}
```

**Order Reference**

Is the returned order Reference on the order create mutation API request

**Redirect URL**

This is the url where after payment completion should be navigated
