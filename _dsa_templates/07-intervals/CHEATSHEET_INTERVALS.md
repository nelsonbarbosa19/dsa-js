# 📑 Cheatsheet de Interval Problems

## 🔹 Regras rápidas

👉 **Fundir / Inserir / Detetar overlaps simples → ordena por `start`.**  
👉 **Selecionar / Remover / Minimizar / Contar recursos → ordena por `end`.**
👉 \*\*Contar simultâneos → ordenar starts e ends.

          Qual é o objetivo do problema?
                    │
     ┌──────────────┼────────────────┐
     │              │                │
 Fundir/Inserir   Selecionar/       Contar quantos
 Intervalos       Remover mínimo    intervalos
 (juntar, unir)   (max. compatíveis) estão ativos
     │              │                │
     ▼              ▼                ▼
 Ordenar por      Ordenar por       Ordenar BOTH:
 START            END               STARTS e ENDS
                                  (varrer com 2 ponteiros)


---

## 🟢 Ordenar por **Start**

Usa quando precisas percorrer intervalos em ordem cronológica e possivelmente **fundir**:

- **56. Merge Intervals** → juntar intervalos sobrepostos.
- **57. Insert Interval** → inserir e fundir intervalos.
- **252. Meeting Rooms I** → verificar se há algum overlap.
- **253. Meeting Rooms II** → requer **duas listas** (starts e ends) → sweep-line ou heap.

**Explicação curta (para entrevistas):**

> “Ordeno por início porque preciso percorrer e colar intervalos vizinhos.”

---

## 🔵 Ordenar por **End**

Usa quando queres **maximizar intervalos compatíveis** ou **minimizar remoções/recursos**:

- **435. Non-overlapping Intervals** → remover o mínimo possível.
- **452. Minimum Number of Arrows to Burst Balloons** → disparar no fim cobre mais balões.

**Explicação curta:**

> “Ordeno por fim porque quero sempre escolher o intervalo que termina mais cedo, libertando espaço.”

---

## 🔧 Técnicas associadas

- **Sweep-line** (253, contagem de salas):

  - Ordena starts e ends separadamente.
  - Avança ponteiros para contar sobreposições máximas.

- **Greedy (por end)**:
  - Usado em seleção de intervalos (435, 452).
  - Sempre escolher o fim mais cedo.

---

## 🧪 Casos edge a lembrar

- `end == start` → **não é overlap** (intervalos são `[start, end)`).
- Input vazio → retorna 0 (ou array vazio).
- Intervalos já disjuntos → não fundem, apenas passam.
- Muitos intervalos iguais → removem-se todos menos 1.

---

## 🧠 Frase-chave para decorar

👉 _“Para fundir, começo pelo início; para selecionar, termino pelo fim.”_
