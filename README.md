# Types vs interfaces

Beware of the fact that interfaces can be merged, which can have impredictable results.

Interfaces can extend other interfaces and types not (except using intersections).

While almost all interface features are available in types or have equivalents, one exception is declaration merging. Interfaces should generally be used when declaration merging is necessary, such as extending an existing library or authoring a new one. Additionally, if you prefer the object-oriented inheritance style, using the extends keyword with an interface is often more readable than using the intersection with type aliases.
