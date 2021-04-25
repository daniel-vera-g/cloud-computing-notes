# amdahls-law

1. p = der O(n) parallelisierbare Teil eines Programmes
1. s = der sequenzielle (nicht parallelisierbare) Teil des Programmes

Maximale Geschwindigkeitsgewinn durch:

> s+p / s+p/N bei N Cores/CPUs gegeben

- Das gilt selbst wenn der Kommunikationsoverhead etc. vernachlässigbar
