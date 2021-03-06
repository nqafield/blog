/**
 * Copyright (c) 2017 Yegor Bugayenko
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the 'Software'), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so. The Software doesn't include files with .md extension.
 * That files you are not allowed to copy, distribute, modify, publish, or sell.
 *
 * THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
class AbcComparison<T extends Digitizable> {
    private T lt;
    private T rt;
    AbcComparison(T left, T right) {
        this.lt = left;
        this.rt = right;
    }
    int value() {
        final byte[] left = this.lt.digits();
        final byte[] right = this.rt.digits();
        final int max = Math.max(left.length, right.length);
        final byte[] la = new byte[max];
        System.arraycopy(left, 0, la, 0, left.length);
        final byte[] ra = new byte[max];
        System.arraycopy(right, 0, ra, 0, right.length);
        return new Comparison<Array>(new Array(la), new Array(ra)).value();
    }
}
