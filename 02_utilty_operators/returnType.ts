function foo(): { firstName: string; lastName: string } {
  return {
    firstName: "Dead",
    lastName: "Pool",
  };
}

type ReturnFoo = ReturnType<typeof foo>;
