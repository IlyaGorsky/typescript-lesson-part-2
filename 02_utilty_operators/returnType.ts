function foo() {
  return {
    firstName: "Dead",
    lastName: "Pool",
  };
}

type ReturnFoo = ReturnType<typeof foo>;
