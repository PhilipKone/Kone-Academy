const e=[{id:"ka-blog-1",title:"Computational Thinking: The Art of Structured Logic",slug:"computational-thinking-structured-logic",category:"Code",excerpt:"Mastering loop patterns, conditional branches, and modular algorithms before writing syntax. Learn how to think like a compiler.",imageUrl:"/assets/blog/ka_blog_logic.webp",readTime:8,author:{name:"Philip Hotor",role:"Head of Engineering",avatar:"/assets/blog/author_philip.webp",linkedinUrl:"https://www.linkedin.com/in/philip-kone"},publishedAt:"2026-08-08",content:`# Computational Thinking: The Art of Structured Logic

Computational thinking is not about memorizing the syntax of Python, C++, or JavaScript. It is the ability to decompose complex problems, identify abstract patterns, isolate logical anomalies, and structure algorithms in clear, sequential step-by-step formats. 

At **Kone School**, we teach computational thinking as the baseline prerequisite before students write a single line of software code.

---

## 🧩 1. The Four Pillars of Computational Thinking

To solve large-scale engineering problems, we break down our logic into four key dimensions:

### 1. Decomposition
Decomposition is the process of breaking a complex problem down into smaller, more manageable sub-problems. If you are building a Logic App, you don't build it all at once; you start by coding the boolean input trigger state, then the conditional logic gate operations, and finally the render interface loop.

### 2. Pattern Recognition
Identifying similarities, repetitions, or shared characteristics across decomposed sub-problems. For instance, realizing that validating email input and validating phone numbers both utilize regular expression search structures.

### 3. Abstraction
Stripping away irrelevant details to focus on the core attributes that define a problem. When modeling database transactions, we abstract away physical storage blocks to deal with logical entity schemas.

### 4. Algorithm Design
Creating a step-by-step instruction set (an algorithm) that solves a problem. Algorithms are human-readable recipes that compile to machine code.

---

## 🔄 2. The Loop Pattern: Automating Computations

A core part of logic is automation. Instead of writing the same instruction multiple times, we design loops.

*   **For Loops**: Executing code a pre-determined number of times (e.g., iterating through a list of 10 school grades).
*   **While Loops**: Running instructions until a specific boolean condition changes (e.g., waiting for a user click event to load a course module).

When writing loops, developers must watch out for the dreaded **Infinite Loop**—where the exit condition is never satisfied, causing the CPU to spike and freeze the application thread.

---

## 💡 3. Actionable Logic Challenge

Before writing code, try this algorithmic exercise:
*   **Problem:** Write a step-by-step instruction set (pseudo-code) to sort a pile of 5 books alphabetically.
*   **Constraint:** You can only compare two books at a time.

This exercise simulates a **Bubble Sort** algorithm. By mapping it out manually, you build the neural pathway needed to think like a processor.

---

**Kone School: Developing analytical minds that build the software of tomorrow.**`},{id:"ka-blog-2",title:"Physical AI: Connecting Code to Microcontrollers",slug:"physical-ai-microcontrollers-robotics",category:"Lab",excerpt:"Moving from the browser sandbox to real-world electrical grids. A deep dive into wiring protocols, sensors, and actuators.",imageUrl:"/assets/blog/ka_blog_robotics.webp",readTime:10,author:{name:"Philip Hotor",role:"Hardware Core Team",avatar:"/assets/blog/author_philip.webp",linkedinUrl:"https://www.linkedin.com/in/philip-kone"},publishedAt:"2026-08-05",content:`# Physical AI: Connecting Code to Microcontrollers

Writing software that lives purely inside a web browser is powerful. But writing code that triggers a physical servo motor, reads humidity metrics from soil, or navigates a robot across a physical floor is magical. 

This bridge is called **Physical AI**—the point where software instructions interface directly with silicon, circuits, and electrical power.

---

## ⚡ 1. The Anatomy of a Physical Interface

To link code with physics, we use microcontrollers (like the ATmega328P on Arduino boards, or the ESP32). Unlike laptops, which are general-purpose computers, microcontrollers are small, dedicated chips designed to run a single program loop continuously at low power consumption.

### The Input/Output Interface:
*   **GPIO (General Purpose Input/Output)**: Silicon pins that send or receive electrical currents (3.3V or 5V).
*   **ADC (Analog-to-Digital Converter)**: Translates variable voltages (like temperature sensor readings) into digital values. On a standard 10-bit ADC (e.g. Arduino Uno), this range is 0 to 1023.
*   **PWM (Pulse Width Modulation)**: Rapidly toggles digital power on and off to simulate intermediate outputs (e.g., dimming a LED light or steering a servo motor pin).

---

## 🛑 2. The Golden Rules of Wiring & Prototyping

When you build physical interfaces, electrical mistakes can destroy your hardware. Always follow these rules:

*   **Never Overdraw Current**: An Arduino Uno digital pin can safely source up to about 20mA (absolute max 40mA). Motors, solenoids, or heaters draw far more. Always use a motor driver, transistor, or relay to handle high-current loads externally.
*   **Shared Ground (Common GND)**: If you use an external battery to power a robotic arm, you must connect its negative terminal to the microcontroller's GND pin. Without a common ground reference, control signals behave unpredictably.
*   **Floating Inputs**: A digital input pin left unconnected picks up stray electrical noise, causing random HIGH/LOW readings. Use internal pull-up resistors (\`INPUT_PULLUP\`) to hold the pin at a defined state until intentionally pulled low.

---

## ⚙️ 3. Where Physical AI Is Heading

At Kone School, students learn to bridge the gap between high-level programming and low-level hardware. The journey starts with writing logic in browser sandboxes, then progresses to flashing compiled firmware onto real microcontrollers — turning digital instructions into physical robotic feedback loops.

---

**Kone Academy Lab: Bridging the gap between software logic and physical reality.**`},{id:"ka-blog-3",title:"Digital AI: Decoupling Large Language Models and Compute",slug:"digital-ai-llms-compute",category:"Lab",excerpt:"How neural networks digest data, mathematical weights, and massive compute to generate predictions. Demystifying the LLM pipeline.",imageUrl:"/assets/blog/ka_blog_digital.webp",readTime:12,author:{name:"Philip Hotor",role:"Strategic Lead",avatar:"/assets/blog/author_philip.webp",linkedinUrl:"https://www.linkedin.com/in/philip-kone"},publishedAt:"2026-08-01",content:`# Digital AI: Decoupling Large Language Models and Compute

The term "AI" is thrown around constantly, but under the hood, artificial intelligence is not magic. It is a mathematical combination of **Data**, **Algorithms (Math/Logic)**, and **Compute (Hardware)** running together.

Let's break down the layers that power Large Language Models (LLMs) like GPT-4o, Gemini, or Claude.

---

## 🧠 1. The Three Foundations of AI

Every modern generative AI engine relies on a three-way symbiotic balance:

### 1. Data (The Food)
Models feed on massive amounts of structured text, code repositories, books, and web assets. The quality and volume of data determine the boundaries of the model's vocabulary and reasoning capabilities.

### 2. Math & Logic (The Brain)
Algorithms organize data into learnable structure. Modern LLMs are built on the **Transformer architecture**, introduced in the 2017 paper "Attention Is All You Need". The core mechanism — self-attention — allows the model to weigh the relevance of every word relative to every other word in a sequence, enabling it to predict the next token based on context.

### 3. Compute (The Power)
The silicon hardware that runs the training matrices. Training an advanced neural network requires billions of mathematical operations per second, running across massive server farms.

---

## 🖥️ 2. The Compute Hardware Hierarchy

The hardware layer is categorized by specialization:
*   **CPU (Central Processing Unit)**: The general-purpose manager. Handles system setup, IO, and sequential tasks.
*   **GPU (Graphics Processing Unit)**: Parallel calculation beast. Massive matrix calculations required for training models.
*   **TPU (Tensor Processing Unit)**: Google-designed custom chips optimized explicitly for neural network math.
*   **NPU (Neural Processing Unit)**: Edge-compute chips in smartphones and laptops designed for local, low-power inference.

---

## 🔌 3. Connecting LLMs to Data: APIs and MCPs

How does a trained LLM act on live data?
*   **APIs (Application Programming Interfaces)**: Structured request/response interfaces that allow applications to send data to and receive data from LLM providers programmatically.
*   **MCP (Model Context Protocol)**: An open protocol (introduced by Anthropic) that standardizes how LLMs connect to external tools, data sources, and services — giving models controlled access to live context beyond their training data.

By understanding this hierarchy, students move from passive users of generative AI tools to strategic builders who can tune models, manage computing resources, and deploy custom agents.

---

**Kone School: Demystifying AI pipelines to empower creative tech leaders.**`}];export{e as s};
