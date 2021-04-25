# shared-disk-architecture

![](../../../attachments/shared-disk-architecture.png)

1. **Pro:**
   - Adaptiert schnell bei unterschiedlichen Last Szenarien (dynamisches Loadbalancing)
   - Failover / HA ist einfach
2. **Con:**
   - Schlecht bei hoher Schreibe Last (dirty Caches in den Knoten)
   - Preis der Skalierung abhängig von der eingesetzten Technologie

## Sources

- Images: <https://upload.wikimedia.org/wikipedia/commons/0/07/Shared_Disk_Architecture.jpg>
