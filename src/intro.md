Hi, I'm a student working toward a Master's in Electrical and Computer
Engineering while finishing up my undergraduate[^idp] double major in Computer
Engineering and Computer Science. Some of my friends know me as a musician that
went to engineering school, but most of the others know me as an engineer that
takes on artsy projects[^guitar] no one else is particularly interested in.

[^idp]:
    To clarify, I'm an undergraduate student in the "Integrated Degree Program"
    which means I will be halfway through my graduate degree by the time I
    finish my undergraduate degree in May 2026. I'll have a year's worth of
    credits left to finish after that, though.

[^guitar]:
    One such project I've had on the backburner for a few years is DIYing a
    "headless" extended-range baritone multi-scale guitar—I'll explain in a
    future blog post what that means in ~~excruciating detail~~ a suitable
    amount of detail.

<!-- TODO link relevant blog post once I write it -->

Between classes, I'm working on a few computationally interesting projects:

- a general-purpose _fixed-point math_ library[^fixed-point] (including `math.h`
  functions)
- blue noise texture generation (and quantifying the difference between "blue"
  filtered white noise and the textures produced by techniques discussed in
  computer graphics literature)
- hardware implementation of _posit_ arithmetic[^posit] (on Xilinx's Artix-7 FPGA)
- analysis of pseudo-random number generation with awareness of number formats
  and probability theory

[^fixed-point]:
    I want to evaluate if, for computationally heavy workflows, it can
    outperform (and by how much) hardware-accelerated floating-point math on a
    modern CPU. This is in contrast to more typical applications of fixed-point
    math in an embedded systems context (usually as a last resort while lacking
    hardware support for floating-point math).

[^posit]:
    While I understand the merits of the IEEE 754 floating-point format and its
    utility for general-purpose applications, I find parts of it (NaNs) to be
    painfully underspecified. [John Gustafson's _posits_][gustafson] seem to be
    a promising alternative to IEEE 754 for modern use-cases.

[gustafson]: http://www.johngustafson.net/pdfs/BeatingFloatingPoint.pdf

I'm also currently trying to learn OpenCL, to write a cross-platform
GPU-accelerated path tracer implementing more of the features of [PBRT]; namely,
multiple importance sampling to get BSDFs and subsurface scattering much more
efficiently than my old CPU-based path tracer.

[PBRT]: https://pbrt.org

---
