# shared-nothing

![](./attachments/shared-nothing.jpg)

- Daten sind partitioniert (Sharding) und lokal zum verarbeitenden Knoten
- (unendlich) skalierbar

1. **Pro:**
   - Gut bei hoher Lese/Schreibe Last
2. **Con:**
   - Schlecht bei Transaktionen über das Cluster
   - Schlecht bei Datenverknüpfungen
   - Weitere Kapazität Ausbau „teuer“
   - HA nur beschränkt möglich
   - Schwer zu „balancen“

## Sources

- Image: <https://tideways.com/wp-content/uploads/import/blog/shared-nothing-architecture.png>
