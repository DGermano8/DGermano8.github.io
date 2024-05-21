import pandas as pd
import random
import matplotlib.pyplot as plt
import jsf

random.seed(42)

x0 = [10, 50]

mA = 2
mB = 1.50
mC = 0.05

rates = lambda x, _: [mA * x[0],
                      mB * x[1],
                      mC * x [0] * x[1]]

reactant_matrix = [[1 , 0],
                   [0 , 1],
                   [1 , 1]]

product_matrix = [[0 , 0],
                  [0 , 2],
                  [2 , 0]]

t_max = 9.2

stoich = {

"nu": [
        [a - b for a, b in zip(r1, r2)] for r1, r2 in zip(product_matrix, reactant_matrix)
      ],

    "DoDisc": [1, 1],
    "nuReactant": reactant_matrix,
    "nuProduct": product_matrix,
}

my_opts = {"EnforceDo": [0, 0], "dt": 0.001, "SwitchingThreshold": [30, 30]}

sim = jsf.jsf(x0, rates, stoich, t_max, config=my_opts, method="operator-splitting")

plt.plot(sim[1], sim[0][0], label="Predator", color=(0.5137, 0.3765, 0.5882), linewidth=2.5, marker='.', markersize=0.0)
plt.plot(sim[1], sim[0][1], label="Prey", color=(0.9294, 0.4824, 0.4824),     linewidth=2.5, marker='.', markersize=0.0)
plt.axhline(y=my_opts["SwitchingThreshold"][1], color=(0.5, 0.5, 0.5), linestyle="--")
plt.xlabel("Time")
plt.ylabel("Population size")
plt.legend()
plt.savefig('PredatorPrey.png', dpi=500)
plt.show()

# save matplotlib plot to file
