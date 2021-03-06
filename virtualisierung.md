# virtualisierung

- Ressourcen kontrollieren, flexibel nutzen
- Verfügbarkeit erhöhen ohne SW Änderung
- Snapshots & Umzug

## Definitionen bei der Virtualisierung

1. Host

   - OS, welche direkt auf HW läuft
   - Hat "Kontrolle" über HW Ressourcen

2. Gast

- Virtualisierte (Laufzeit-)Umgebung, welche über Abstraktion HW-Ressourcen nutzt

## X86 Architektur

### Protected Mode

- 4 Sicherheitsstufen (Ringe 0-3)
- Privilegien nehmen nach „außen“ ab:

1. Ring 0 (Kernel Mode): darf „alles“, Speicher, Befehle
2. Ring 1,2: unbesetzt
3. Ring 3 (User Mode): darf System Befehle nur über SYSCALL/SYSENTER, INT 80 ausführen

## Arten der Virtualisierung

- [[applikations-virtualisierung]]
- [[container-virtualisierung]]
- [[hardware-virtualisierung]]

[//begin]: # "Autogenerated link references for markdown compatibility"
[applikations-virtualisierung]: applikations-virtualisierung.md "applikations-virtualisierung"
[container-virtualisierung]: container-virtualisierung.md "container-virtualisierung"
[hardware-virtualisierung]: hardware-virtualisierung.md "hardware-virtualisierung"
[//end]: # "Autogenerated link references"
