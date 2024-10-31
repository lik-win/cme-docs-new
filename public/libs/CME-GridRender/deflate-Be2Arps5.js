import { i as r } from "./pako.esm-C3kYPGGQ.js";
import { B as a } from "./basedecoder-Qm25PwVp.js";
class s extends a {
  decodeBlock(e) {
    return r(new Uint8Array(e)).buffer;
  }
}
export {
  s as default
};
//# sourceMappingURL=deflate-Be2Arps5.js.map
