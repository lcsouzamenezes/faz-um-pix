// tslint:disable:no-unused-expression
import { expect } from "chai";
import "mocha";
import { Pix } from "../src";

describe("Pix()", () => {
  it("Deve retornar o Payload da transação", async () => {
    expect(
      await Pix("16439420771", "CELSO", "SAO PAULO", 0.1, "Pedido #123456")
    ).to.equal(
      "00020126510014br.gov.bcb.pix0111164394207710214Pedido #12345652040000530398654030.15802BR5905CELSO6009SAO PAULO62070503***63047557"
    );
  });
  it("Deve retornar o QrCode da transação", async () => {
    expect(
      await Pix(
        "16439420771",
        "CELSO",
        "SAO PAULO",
        0.1,
        "Pedido #123456",
        true
      )
    ).to.equal(
      "data:image/gif;base64,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"
    );
  });
});
