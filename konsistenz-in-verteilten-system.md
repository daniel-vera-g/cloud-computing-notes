# konsistenz-in-verteilten-system

## Konsistenz in verteilten Systemen aus Client Sicht

1. **Monotonic Read Consistency**: System liefert niemals ältere Version bei Leseanfragen an den gleichen Schlüssel.
2. **Monotonic Write Consistency**: System garantiert die gleiche Schreib- Reihenfolge für alle Knoten (Replikas)
3. **Read Your Writes Consistency**: System liefert einem Client der eine Schreiboperation ausgeführt hat keine ältere
   Version des Datums.
4. **Write Follows Reads Consistency**: Das System garantiert, dass ein Schreibvorgang auf ein Datum in Version X auf
   anderen Knoten (Replikas) nur ausgeführt wird wenn dort das Datum auch in Version X vorliegt.
5. **Strict Consistency**: Leseoperation liefert immer den neusten Wert (Ergebnis der Letzten Schreiboperation)
