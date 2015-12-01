describe("Cart Sum", function() {

  var tested = cartSum1;
  it("should reject arguments that are neither an array nor an objet", function() {
    expect(tested(123)).toEqual(null);
    expect(tested("123")).toEqual(null);
  });

  it("should accept empty carts", function() {
    expect(tested([])).toEqual(0);
    expect(tested({})).toEqual(0);
  });

  it("should compute sum for carts with one item", function() {
    expect(tested({ name: "book", price: 19.95, q: 1 })).toEqual(19.95);
    expect(tested({ name: "book", price: 19.95, q: 2 })).toEqual(39.90);
    expect(tested([{ name: "book", price: 19.95, q: 1 }])).toEqual(19.95);
  });

  it("should compute sum for cart with several items", function() {
    expect(tested([
      { name: "book", price: 19.95, q: 2 },
      { name: "dvd", price: 12, q: 3 },
      { name: "phone", price: 150, q: 1 }
    ])).toEqual(225.9);
  });

  it("should know that no quantity means 1 item", function() {
    expect(tested({ name: "book", price: 19.95 })).toEqual(19.95);
    expect(tested([
      { name: "book", price: 19.95, q: 2 },
      { name: "dvd", price: 12 },
      { name: "phone", price: 150 }
    ])).toEqual(201.9);
  });
});
