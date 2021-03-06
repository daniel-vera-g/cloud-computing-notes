# apache-cassandra

Eigenschaften:

1. Peer-to-Peer Modell - kein Master: [[gossip-protokoll]]
1. Automatische Replikation / Verteilung: [[consistent-hashing]]
1. Multi-Datacenter Support
1. [[tuneable-consistency]] Modell (per Operation) – read repair Konflikt Auflösung
1. Hohe Performance: r/w skaliert weitestgehend linear mit Anzahl der Knoten
1. Hohe Verfügbarkeit: Definierbarer Replikationsfaktor, [[hinted-handoff]]
1. Cassandra Query Language (CQL)
1. Lightweight Transactions: PAXOS [^paxos]
1. [[map-reduce]] support: Integration in Hadoop

[^paxos]: https://stackoverflow.com/questions/57038300/understanding-cassandra-paxos-implementation

[//begin]: # "Autogenerated link references for markdown compatibility"
[gossip-protokoll]: gossip-protokoll.md "gossip-protokoll"
[consistent-hashing]: consistent-hashing.md "consistent-hashing"
[tuneable-consistency]: tuneable-consistency.md "tuneable-consistency"
[hinted-handoff]: hinted-handoff.md "hinted-handoff"
[map-reduce]: map-reduce.md "map & reduce"
[//end]: # "Autogenerated link references"