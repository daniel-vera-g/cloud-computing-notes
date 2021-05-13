# reactor-pattern

> "The service handler demultiplexes the incoming requests and dispatches them synchronously to the associated request handlers"

![](./attachments/reactor.png)

## Konzept

1. Annahme und Dispatchen Asynchroner Requests
1. Serialisierte Abarbeitung

## Vorteile

- Belegt wenig Ressourcen auf langsamen Clients
- Kein Kontext wechsel -> Kosten für request kostengünstig

## Nachteile

- Non-Preemptive => kein Blocking I/O in den Event Handlern
- Wenig Isolation
- Schwer zu debuggen

## Beispiele

1. NGINX
2. NodeJS event loop

- <https://stackoverflow.com/questions/56739934/is-nodejs-representing-reactor-or-proactor-design-pattern>
- <https://subscription.packtpub.com/book/web_development/9781783287314/1/ch01lvl1sec09/the-reactor-pattern>

## Quellen

- <https://en.wikipedia.org/wiki/Reactor_pattern>
- <https://stackoverflow.com/questions/5566653/simple-explanation-for-the-reactor-pattern-with-its-applications>
- <http://www.dre.vanderbilt.edu/~schmidt/PDF/reactor-siemens.pdf>
- Image: <https://images.app.goo.gl/4P9bsWNitpNoiWKRA>
