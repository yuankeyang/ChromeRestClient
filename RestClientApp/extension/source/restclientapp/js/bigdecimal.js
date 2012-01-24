function div(B,A){return(B-(B%A))/A}BigDecimal.prototype.div=div;function arraycopy(F,E,A,D,C){var B;if(D>E){for(B=C-1;B>=0;--B){A[B+D]=F[B+E]}}else{for(B=0;B<C;++B){A[B+D]=F[B+E]}}}BigDecimal.prototype.arraycopy=arraycopy;function createArrayWithZeros(B){var C=new Array(B);var A;for(A=0;A<B;++A){C[A]=0}return C}BigDecimal.prototype.createArrayWithZeros=createArrayWithZeros;BigDecimal.prototype.abs=abs;BigDecimal.prototype.add=add;BigDecimal.prototype.compareTo=compareTo;BigDecimal.prototype.divide=divide;BigDecimal.prototype.divideInteger=divideInteger;BigDecimal.prototype.max=max;BigDecimal.prototype.min=min;BigDecimal.prototype.multiply=multiply;BigDecimal.prototype.negate=negate;BigDecimal.prototype.plus=plus;BigDecimal.prototype.pow=pow;BigDecimal.prototype.remainder=remainder;BigDecimal.prototype.subtract=subtract;BigDecimal.prototype.equals=equals;BigDecimal.prototype.format=format;BigDecimal.prototype.intValueExact=intValueExact;BigDecimal.prototype.movePointLeft=movePointLeft;BigDecimal.prototype.movePointRight=movePointRight;BigDecimal.prototype.scale=scale;BigDecimal.prototype.setScale=setScale;BigDecimal.prototype.signum=signum;BigDecimal.prototype.toString=toString;BigDecimal.prototype.layout=layout;BigDecimal.prototype.intcheck=intcheck;BigDecimal.prototype.dodivide=dodivide;BigDecimal.prototype.bad=bad;BigDecimal.prototype.badarg=badarg;BigDecimal.prototype.extend=extend;BigDecimal.prototype.byteaddsub=byteaddsub;BigDecimal.prototype.diginit=diginit;BigDecimal.prototype.clone=clone;BigDecimal.prototype.checkdigits=checkdigits;BigDecimal.prototype.round=round;BigDecimal.prototype.allzero=allzero;BigDecimal.prototype.finish=finish;BigDecimal.prototype.ROUND_CEILING=MathContext.prototype.ROUND_CEILING;BigDecimal.prototype.ROUND_DOWN=MathContext.prototype.ROUND_DOWN;BigDecimal.prototype.ROUND_FLOOR=MathContext.prototype.ROUND_FLOOR;BigDecimal.prototype.ROUND_HALF_DOWN=MathContext.prototype.ROUND_HALF_DOWN;BigDecimal.prototype.ROUND_HALF_EVEN=MathContext.prototype.ROUND_HALF_EVEN;BigDecimal.prototype.ROUND_HALF_UP=MathContext.prototype.ROUND_HALF_UP;BigDecimal.prototype.ROUND_UNNECESSARY=MathContext.prototype.ROUND_UNNECESSARY;BigDecimal.prototype.ROUND_UP=MathContext.prototype.ROUND_UP;BigDecimal.prototype.ispos=1;BigDecimal.prototype.iszero=0;BigDecimal.prototype.isneg=-1;BigDecimal.prototype.MinExp=-999999999;BigDecimal.prototype.MaxExp=999999999;BigDecimal.prototype.MinArg=-999999999;BigDecimal.prototype.MaxArg=999999999;BigDecimal.prototype.plainMC=new MathContext(0,MathContext.prototype.PLAIN);BigDecimal.prototype.bytecar=new Array((90+99)+1);BigDecimal.prototype.bytedig=diginit();BigDecimal.prototype.ZERO=new BigDecimal("0");BigDecimal.prototype.ONE=new BigDecimal("1");BigDecimal.prototype.TEN=new BigDecimal("10");function BigDecimal(){this.ind=0;this.form=MathContext.prototype.PLAIN;this.mant=null;this.exp=0;if(BigDecimal.arguments.length==0){return }var P;var I;var G;if(BigDecimal.arguments.length==1){P=BigDecimal.arguments[0];I=0;G=P.length}else{P=BigDecimal.arguments[0];I=BigDecimal.arguments[1];G=BigDecimal.arguments[2]}if(typeof P=="string"){P=P.split("")}var K;var O;var R;var V;var J;var N=0;var U=0;var A=false;var L=0;var Q=0;var M=0;var T=0;var S=0;var C=0;if(G<=0){this.bad("BigDecimal(): ",P)}this.ind=this.ispos;if(P[0]==("-")){G--;if(G==0){this.bad("BigDecimal(): ",P)}this.ind=this.isneg;I++}else{if(P[0]==("+")){G--;if(G==0){this.bad("BigDecimal(): ",P)}I++}}K=false;O=false;R=0;V=-1;J=-1;var H=G;N=I;N:for(;H>0;H--,N++){U=P[N];if(U>="0"){if(U<="9"){J=N;R++;continue N}}if(U=="."){if(V>=0){this.bad("BigDecimal(): ",P)}V=N-I;continue N}if(U!="e"){if(U!="E"){if(U<"0"||U>"9"){this.bad("BigDecimal(): ",P)}K=true;J=N;R++;continue N}}if((N-I)>(G-2)){this.bad("BigDecimal(): ",P)}A=false;if((P[N+1])==("-")){A=true;L=N+2}else{if((P[N+1])==("+")){L=N+2}else{L=N+1}}Q=G-((L-I));if((Q==0)||(Q>9)){this.bad("BigDecimal(): ",P)}var F=Q;M=L;M:for(;F>0;F--,M++){T=P[M];if(T<"0"){this.bad("BigDecimal(): ",P)}if(T>"9"){this.bad("BigDecimal(): ",P)}else{S=T-"0"}this.exp=(this.exp*10)+S}if(A){this.exp=-this.exp}O=true;break N}if(R==0){this.bad("BigDecimal(): ",P)}if(V>=0){this.exp=(this.exp+V)-R}var E=J-1;N=I;N:for(;N<=E;N++){U=P[N];if(U=="0"){I++;V--;R--}else{if(U=="."){I++;V--}else{if(U<="9"){break N}else{break N}}}}this.mant=new Array(R);M=I;if(K){exotica:do{var D=R;N=0;N:for(;D>0;D--,N++){if(N==V){M++}T=P[M];if(T<="9"){this.mant[N]=T-"0"}else{this.bad("BigDecimal(): ",P)}M++}}while(false)}else{simple:do{var B=R;N=0;N:for(;B>0;B--,N++){if(N==V){M++}this.mant[N]=P[M]-"0";M++}}while(false)}if(this.mant[0]==0){this.ind=this.iszero;if(this.exp>0){this.exp=0}if(O){this.mant=this.ZERO.mant;this.exp=0}}else{if(O){this.form=MathContext.prototype.SCIENTIFIC;C=(this.exp+this.mant.length)-1;if((C<this.MinExp)||(C>this.MaxExp)){this.bad("BigDecimal(): ",P)}}}return }function abs(){var A;if(abs.arguments.length==1){A=abs.arguments[0]}else{if(abs.arguments.length==0){A=this.plainMC}else{throw"abs(): "+abs.arguments.length+" arguments given; expected 0 or 1"}}if(this.ind==this.isneg){return this.negate(A)}return this.plus(A)}function add(){var J;if(add.arguments.length==2){J=add.arguments[1]}else{if(add.arguments.length==1){J=this.plainMC}else{throw"add(): "+add.arguments.length+" arguments given; expected 1 or 2"}}var A=add.arguments[0];var P;var B;var R;var D;var Q;var S;var N;var H=0;var C=0;var E=0;var I=null;var O=0;var M=0;var G=0;var F=0;var L=0;var K=0;if(J.lostDigits){this.checkdigits(A,J.digits)}P=this;if(P.ind==0){if(J.form!=MathContext.prototype.PLAIN){return A.plus(J)}}if(A.ind==0){if(J.form!=MathContext.prototype.PLAIN){return P.plus(J)}}B=J.digits;if(B>0){if(P.mant.length>B){P=this.clone(P).round(J)}if(A.mant.length>B){A=this.clone(A).round(J)}}R=new BigDecimal();D=P.mant;Q=P.mant.length;S=A.mant;N=A.mant.length;padder:do{if(P.exp==A.exp){R.exp=P.exp}else{if(P.exp>A.exp){H=(Q+P.exp)-A.exp;if(H>=((N+B)+1)){if(B>0){R.mant=D;R.exp=P.exp;R.ind=P.ind;if(Q<B){R.mant=this.extend(P.mant,B);R.exp=R.exp-((B-Q))}return R.finish(J,false)}}R.exp=A.exp;if(H>(B+1)){if(B>0){C=(H-B)-1;N=N-C;R.exp=R.exp+C;H=B+1}}if(H>Q){Q=H}}else{H=(N+A.exp)-P.exp;if(H>=((Q+B)+1)){if(B>0){R.mant=S;R.exp=A.exp;R.ind=A.ind;if(N<B){R.mant=this.extend(A.mant,B);R.exp=R.exp-((B-N))}return R.finish(J,false)}}R.exp=P.exp;if(H>(B+1)){if(B>0){C=(H-B)-1;Q=Q-C;R.exp=R.exp+C;H=B+1}}if(H>N){N=H}}}}while(false);if(P.ind==this.iszero){R.ind=this.ispos}else{R.ind=P.ind}if(((P.ind==this.isneg)?1:0)==((A.ind==this.isneg)?1:0)){E=1}else{signdiff:do{E=-1;swaptest:do{if(A.ind==this.iszero){}else{if((Q<N)||(P.ind==this.iszero)){I=D;D=S;S=I;C=Q;Q=N;N=C;R.ind=-R.ind}else{if(Q>N){}else{O=0;M=0;G=D.length-1;F=S.length-1;compare:for(;;){if(O<=G){L=D[O]}else{if(M>F){if(J.form!=MathContext.prototype.PLAIN){return this.ZERO}break compare}L=0}if(M<=F){K=S[M]}else{K=0}if(L!=K){if(L<K){I=D;D=S;S=I;C=Q;Q=N;N=C;R.ind=-R.ind}break compare}O++;M++}}}}}while(false)}while(false)}R.mant=this.byteaddsub(D,Q,S,N,E,false);return R.finish(J,false)}function compareTo(){var F;if(compareTo.arguments.length==2){F=compareTo.arguments[1]}else{if(compareTo.arguments.length==1){F=this.plainMC}else{throw"compareTo(): "+compareTo.arguments.length+" arguments given; expected 1 or 2"}}var E=compareTo.arguments[0];var D=0;var A=0;var C;if(F.lostDigits){this.checkdigits(E,F.digits)}if((this.ind==E.ind)&&(this.exp==E.exp)){D=this.mant.length;if(D<E.mant.length){return -this.ind}if(D>E.mant.length){return this.ind}if((D<=F.digits)||(F.digits==0)){var B=D;A=0;A:for(;B>0;B--,A++){if(this.mant[A]<E.mant[A]){return -this.ind}if(this.mant[A]>E.mant[A]){return this.ind}}return 0}}else{if(this.ind<E.ind){return -1}if(this.ind>E.ind){return 1}}C=this.clone(E);C.ind=-C.ind;return this.add(C,F).ind}function divide(){var C;var A=-1;if(divide.arguments.length==2){if(typeof divide.arguments[1]=="number"){C=new MathContext(0,MathContext.prototype.PLAIN,false,divide.arguments[1])}else{C=divide.arguments[1]}}else{if(divide.arguments.length==3){A=divide.arguments[1];if(A<0){throw"divide(): Negative scale: "+A}C=new MathContext(0,MathContext.prototype.PLAIN,false,divide.arguments[2])}else{if(divide.arguments.length==1){C=this.plainMC}else{throw"divide(): "+divide.arguments.length+" arguments given; expected between 1 and 3"}}}var B=divide.arguments[0];return this.dodivide("D",B,C,A)}function divideInteger(){var B;if(divideInteger.arguments.length==2){B=divideInteger.arguments[1]}else{if(divideInteger.arguments.length==1){B=this.plainMC}else{throw"divideInteger(): "+divideInteger.arguments.length+" arguments given; expected 1 or 2"}}var A=divideInteger.arguments[0];return this.dodivide("I",A,B,0)}function max(){var B;if(max.arguments.length==2){B=max.arguments[1]}else{if(max.arguments.length==1){B=this.plainMC}else{throw"max(): "+max.arguments.length+" arguments given; expected 1 or 2"}}var A=max.arguments[0];if((this.compareTo(A,B))>=0){return this.plus(B)}else{return A.plus(B)}}function min(){var B;if(min.arguments.length==2){B=min.arguments[1]}else{if(min.arguments.length==1){B=this.plainMC}else{throw"min(): "+min.arguments.length+" arguments given; expected 1 or 2"}}var A=min.arguments[0];if((this.compareTo(A,B))<=0){return this.plus(B)}else{return A.plus(B)}}function multiply(){var L;if(multiply.arguments.length==2){L=multiply.arguments[1]}else{if(multiply.arguments.length==1){L=this.plainMC}else{throw"multiply(): "+multiply.arguments.length+" arguments given; expected 1 or 2"}}var H=multiply.arguments[0];var D;var K;var G;var C=null;var M=null;var I;var N=0;var J;var E;var B=0;var F=0;if(L.lostDigits){this.checkdigits(H,L.digits)}D=this;K=0;G=L.digits;if(G>0){if(D.mant.length>G){D=this.clone(D).round(L)}if(H.mant.length>G){H=this.clone(H).round(L)}}else{if(D.exp>0){K=K+D.exp}if(H.exp>0){K=K+H.exp}}if(D.mant.length<H.mant.length){C=D.mant;M=H.mant}else{C=H.mant;M=D.mant}I=(C.length+M.length)-1;if((C[0]*M[0])>9){N=I+1}else{N=I}J=new BigDecimal();E=this.createArrayWithZeros(N);var A=C.length;B=0;B:for(;A>0;A--,B++){F=C[B];if(F!=0){E=this.byteaddsub(E,E.length,M,I,F,true)}I--}J.ind=D.ind*H.ind;J.exp=(D.exp+H.exp)-K;if(K==0){J.mant=E}else{J.mant=this.extend(E,E.length+K)}return J.finish(L,false)}function negate(){var B;if(negate.arguments.length==1){B=negate.arguments[0]}else{if(negate.arguments.length==0){B=this.plainMC}else{throw"negate(): "+negate.arguments.length+" arguments given; expected 0 or 1"}}var A;if(B.lostDigits){this.checkdigits(null,B.digits)}A=this.clone(this);A.ind=-A.ind;return A.finish(B,false)}function plus(){var A;if(plus.arguments.length==1){A=plus.arguments[0]}else{if(plus.arguments.length==0){A=this.plainMC}else{throw"plus(): "+plus.arguments.length+" arguments given; expected 0 or 1"}}if(A.lostDigits){this.checkdigits(null,A.digits)}if(A.form==MathContext.prototype.PLAIN){if(this.form==MathContext.prototype.PLAIN){if(this.mant.length<=A.digits){return this}if(A.digits==0){return this}}}return this.clone(this).finish(A,false)}function pow(){var K;if(pow.arguments.length==2){K=pow.arguments[1]}else{if(pow.arguments.length==1){K=this.plainMC}else{throw"pow(): "+pow.arguments.length+" arguments given; expected 1 or 2"}}var H=pow.arguments[0];var A;var B;var D;var G=0;var J=0;var F;var I;var E;var C=0;if(K.lostDigits){this.checkdigits(H,K.digits)}A=this.intcheck(H,this.MinArg,this.MaxArg);B=this;D=K.digits;if(D==0){if(H.ind==this.isneg){throw"pow(): Negative power: "+H.toString()}G=0}else{if((H.mant.length+H.exp)>D){throw"pow(): Too many digits: "+H.toString()}if(B.mant.length>D){B=this.clone(B).round(K)}J=H.mant.length+H.exp;G=(D+J)+1}F=new MathContext(G,K.form,false,K.roundingMode);I=this.ONE;if(A==0){return I}if(A<0){A=-A}E=false;C=1;C:for(;;C++){A=A+A;if(A<0){E=true;I=I.multiply(B,F)}if(C==31){break C}if((!E)){continue C}I=I.multiply(I,F)}if(H.ind<0){I=this.ONE.divide(I,F)}return I.finish(K,true)}function remainder(){var B;if(remainder.arguments.length==2){B=remainder.arguments[1]}else{if(remainder.arguments.length==1){B=this.plainMC}else{throw"remainder(): "+remainder.arguments.length+" arguments given; expected 1 or 2"}}var A=remainder.arguments[0];return this.dodivide("R",A,B,-1)}function subtract(){var C;if(subtract.arguments.length==2){C=subtract.arguments[1]}else{if(subtract.arguments.length==1){C=this.plainMC}else{throw"subtract(): "+subtract.arguments.length+" arguments given; expected 1 or 2"}}var B=subtract.arguments[0];var A;if(C.lostDigits){this.checkdigits(B,C.digits)}A=this.clone(B);A.ind=-A.ind;return this.add(A,C)}function equals(E){var G;var C=0;var F=null;var D=null;if(E==null){return false}if((!(((E instanceof BigDecimal))))){return false}G=E;if(this.ind!=G.ind){return false}if(((this.mant.length==G.mant.length)&&(this.exp==G.exp))&&(this.form==G.form)){var B=this.mant.length;C=0;C:for(;B>0;B--,C++){if(this.mant[C]!=G.mant[C]){return false}}}else{F=this.layout();D=G.layout();if(F.length!=D.length){return false}var A=F.length;C=0;C:for(;A>0;A--,C++){if(F[C]!=D[C]){return false}}}return true}function format(){var V;var F;var C;var D;if(format.arguments.length==6){V=format.arguments[2];F=format.arguments[3];C=format.arguments[4];D=format.arguments[5]}else{if(format.arguments.length==2){V=-1;F=-1;C=MathContext.prototype.SCIENTIFIC;D=this.ROUND_HALF_UP}else{throw"format(): "+format.arguments.length+" arguments given; expected 2 or 6"}}var P=format.arguments[0];var E=format.arguments[1];var H;var B=0;var G=0;var X=0;var A=null;var T=0;var M=0;var K=0;var Y;var S=0;var U=null;var W=0;var O=0;if((P<(-1))||(P==0)){this.badarg("format",1,P)}if(E<(-1)){this.badarg("format",2,E)}if((V<(-1))||(V==0)){this.badarg("format",3,V)}if(F<(-1)){this.badarg("format",4,F)}if(C==MathContext.prototype.SCIENTIFIC){}else{if(C==MathContext.prototype.ENGINEERING){}else{if(C==(-1)){C=MathContext.prototype.SCIENTIFIC}else{this.badarg("format",5,C)}}}if(D!=this.ROUND_HALF_UP){try{if(D==(-1)){D=this.ROUND_HALF_UP}else{new MathContext(9,MathContext.prototype.SCIENTIFIC,false,D)}}catch(R){this.badarg("format",6,D)}}H=this.clone(this);setform:do{if(F==(-1)){H.form=MathContext.prototype.PLAIN}else{if(H.ind==this.iszero){H.form=MathContext.prototype.PLAIN}else{B=H.exp+H.mant.length;if(B>F){H.form=C}else{if(B<(-5)){H.form=C}else{H.form=MathContext.prototype.PLAIN}}}}}while(false);if(E>=0){setafter:for(;;){if(H.form==MathContext.prototype.PLAIN){G=-H.exp}else{if(H.form==MathContext.prototype.SCIENTIFIC){G=H.mant.length-1}else{X=(((H.exp+H.mant.length)-1))%3;if(X<0){X=3+X}X++;if(X>=H.mant.length){G=0}else{G=H.mant.length-X}}}if(G==E){break setafter}if(G<E){A=this.extend(H.mant,(H.mant.length+E)-G);H.mant=A;H.exp=H.exp-((E-G));if(H.exp<this.MinExp){throw"format(): Exponent Overflow: "+H.exp}break setafter}T=G-E;if(T>H.mant.length){H.mant=this.ZERO.mant;H.ind=this.iszero;H.exp=0;continue setafter}M=H.mant.length-T;K=H.exp;H.round(M,D);if((H.exp-K)==T){break setafter}}}Y=H.layout();if(P>0){var Q=Y.length;S=0;S:for(;Q>0;Q--,S++){if(Y[S]=="."){break S}if(Y[S]=="E"){break S}}if(S>P){this.badarg("format",1,P)}if(S<P){U=new Array((Y.length+P)-S);var N=P-S;W=0;W:for(;N>0;N--,W++){U[W]=" "}this.arraycopy(Y,0,U,W,Y.length);Y=U}}if(V>0){var L=Y.length-1;S=Y.length-1;S:for(;L>0;L--,S--){if(Y[S]=="E"){break S}}if(S==0){U=new Array((Y.length+V)+2);this.arraycopy(Y,0,U,0,Y.length);var J=V+2;W=Y.length;W:for(;J>0;J--,W++){U[W]=" "}Y=U}else{O=(Y.length-S)-2;if(O>V){this.badarg("format",3,V)}if(O<V){U=new Array((Y.length+V)-O);this.arraycopy(Y,0,U,0,S+2);var I=V-O;W=S+2;W:for(;I>0;I--,W++){U[W]="0"}this.arraycopy(Y,S+2,U,W,O);Y=U}}}return Y.join("")}function intValueExact(){var E;var C=0;var A;var B=0;var F=0;if(this.ind==this.iszero){return 0}E=this.mant.length-1;if(this.exp<0){E=E+this.exp;if((!(this.allzero(this.mant,E+1)))){throw"intValueExact(): Decimal part non-zero: "+this.toString()}if(E<0){return 0}C=0}else{if((this.exp+E)>9){throw"intValueExact(): Conversion overflow: "+this.toString()}C=this.exp}A=0;var D=E+C;B=0;B:for(;B<=D;B++){A=A*10;if(B<=E){A=A+this.mant[B]}}if((E+C)==9){F=div(A,1000000000);if(F!=this.mant[0]){if(A==-2147483648){if(this.ind==this.isneg){if(this.mant[0]==2){return A}}}throw"intValueExact(): Conversion overflow: "+this.toString()}}if(this.ind==this.ispos){return A}return -A}function movePointLeft(B){var A;A=this.clone(this);A.exp=A.exp-B;return A.finish(this.plainMC,false)}function movePointRight(B){var A;A=this.clone(this);A.exp=A.exp+B;return A.finish(this.plainMC,false)}function scale(){if(this.exp>=0){return 0}return -this.exp}function setScale(){var B;if(setScale.arguments.length==2){B=setScale.arguments[1]}else{if(setScale.arguments.length==1){B=this.ROUND_UNNECESSARY}else{throw"setScale(): "+setScale.arguments.length+" given; expected 1 or 2"}}var F=setScale.arguments[0];var A;var C;var D=0;var E=0;A=this.scale();if(A==F){if(this.form==MathContext.prototype.PLAIN){return this}}C=this.clone(this);if(A<=F){if(A==0){D=C.exp+F}else{D=F-A}C.mant=this.extend(C.mant,C.mant.length+D);C.exp=-F}else{if(F<0){throw"setScale(): Negative scale: "+F}E=C.mant.length-((A-F));C=C.round(E,B);if(C.exp!=(-F)){C.mant=this.extend(C.mant,C.mant.length+1);C.exp=C.exp-1}}C.form=MathContext.prototype.PLAIN;return C}function signum(){return this.ind}function toString(){return this.layout().join("")}function layout(){var M;var F=0;var L=null;var K=0;var N=0;var J=0;var E=null;var I;var G;var H=0;M=new Array(this.mant.length);var D=this.mant.length;F=0;F:for(;D>0;D--,F++){M[F]=this.mant[F]+""}if(this.form!=MathContext.prototype.PLAIN){L="";if(this.ind==this.isneg){L+="-"}K=(this.exp+M.length)-1;if(this.form==MathContext.prototype.SCIENTIFIC){L+=M[0];if(M.length>1){L+="."}L+=M.slice(1).join("")}else{engineering:do{N=K%3;if(N<0){N=3+N}K=K-N;N++;if(N>=M.length){L+=M.join("");var B=N-M.length;for(;B>0;B--){L+="0"}}else{L+=M.slice(0,N).join("");L+=".";L+=M.slice(N).join("")}}while(false)}if(K!=0){if(K<0){J="-";K=-K}else{J="+"}L+="E";L+=J;L+=K}return L.split("")}if(this.exp==0){if(this.ind>=0){return M}E=new Array(M.length+1);E[0]="-";this.arraycopy(M,0,E,1,M.length);return E}I=((this.ind==this.isneg)?1:0);G=this.exp+M.length;if(G<1){H=(I+2)-this.exp;E=new Array(H);if(I!=0){E[0]="-"}E[I]="0";E[I+1]=".";var C=-G;F=I+2;F:for(;C>0;C--,F++){E[F]="0"}this.arraycopy(M,0,E,(I+2)-G,M.length);return E}if(G>M.length){H=I+G;E=new Array(H);if(I!=0){E[0]="-"}this.arraycopy(M,0,E,I,M.length);var A=G-M.length;F=I+M.length;F:for(;A>0;A--,F++){E[F]="0"}return E}H=(I+1)+M.length;E=new Array(H);if(I!=0){E[0]="-"}this.arraycopy(M,0,E,I,G);E[I+G]=".";this.arraycopy(M,G,E,(I+G)+1,M.length-G);return E}function intcheck(C,A){var B;B=this.intValueExact();if((B<C)||(B>A)){throw"intcheck(): Conversion overflow: "+B}return B}function intcheck(C,B,A){if((C<B)||(C>A)){throw"intcheck(): Conversion overflow: "+C}return C}function dodivide(C,A,Q,a){var T;var B;var Y;var b;var O;var c;var G;var Z;var M;var H;var I;var S=0;var U=0;var F=0;var N=0;var L=0;var K=0;var R=0;var X=0;var J=null;var P=0;var E=0;var D=null;if(Q.lostDigits){this.checkdigits(A,Q.digits)}T=this;if(A.ind==0){throw"dodivide(): Divide by 0"}if(T.ind==0){if(Q.form!=MathContext.prototype.PLAIN){return this.ZERO}if(a==(-1)){return T}return T.setScale(a)}B=Q.digits;if(B>0){if(T.mant.length>B){T=this.clone(T).round(Q)}if(A.mant.length>B){A=this.clone(A).round(Q)}}else{if(a==(-1)){a=T.scale()}B=T.mant.length;if(a!=(-T.exp)){B=(B+a)+T.exp}B=(B-((A.mant.length-1)))-A.exp;if(B<T.mant.length){B=T.mant.length}if(B<A.mant.length){B=A.mant.length}}Y=((T.exp-A.exp)+T.mant.length)-A.mant.length;if(Y<0){if(C!="D"){if(C=="I"){return this.ZERO}return this.clone(T).finish(Q,false)}}b=new BigDecimal();b.ind=(T.ind*A.ind);b.exp=Y;b.mant=this.createArrayWithZeros(B+1);O=(B+B)+1;c=this.extend(T.mant,O);G=O;Z=A.mant;M=O;H=(Z[0]*10)+1;if(Z.length>1){H=H+Z[1]}I=0;outer:for(;;){S=0;inner:for(;;){if(G<M){break inner}if(G==M){compare:do{var W=G;U=0;U:for(;W>0;W--,U++){if(U<Z.length){F=Z[U]}else{F=0}if(c[U]<F){break inner}if(c[U]>F){break compare}}S++;b.mant[I]=S;I++;c[0]=0;break outer}while(false);N=c[0]}else{N=c[0]*10;if(G>1){N=N+c[1]}}L=div((N*10),H);if(L==0){L=1}S=S+L;c=this.byteaddsub(c,G,Z,M,-L,true);if(c[0]!=0){continue inner}var V=G-2;K=0;K:for(;K<=V;K++){if(c[K]!=0){break K}G--}if(K==0){continue inner}this.arraycopy(c,K,c,0,G)}if((I!=0)||(S!=0)){b.mant[I]=S;I++;if(I==(B+1)){break outer}if(c[0]==0){break outer}}if(a>=0){if((-b.exp)>a){break outer}}if(C!="D"){if(b.exp<=0){break outer}}b.exp=b.exp-1;M--}if(I==0){I=1}if((C=="I")||(C=="R")){if((I+b.exp)>B){throw"dodivide(): Integer overflow"}if(C=="R"){remainder:do{if(b.mant[0]==0){return this.clone(T).finish(Q,false)}if(c[0]==0){return this.ZERO}b.ind=T.ind;R=((B+B)+1)-T.mant.length;b.exp=(b.exp-R)+T.exp;X=G;U=X-1;U:for(;U>=1;U--){if(!((b.exp<T.exp)&&(b.exp<A.exp))){break}if(c[U]!=0){break U}X--;b.exp=b.exp+1}if(X<c.length){J=new Array(X);this.arraycopy(c,0,J,0,X);c=J}b.mant=c;return b.finish(Q,false)}while(false)}}else{if(c[0]!=0){P=b.mant[I-1];if(((P%5))==0){b.mant[I-1]=(P+1)}}}if(a>=0){scaled:do{if(I!=b.mant.length){b.exp=b.exp-((b.mant.length-I))}E=b.mant.length-(((-b.exp)-a));b.round(E,Q.roundingMode);if(b.exp!=(-a)){b.mant=this.extend(b.mant,b.mant.length+1);b.exp=b.exp-1}return b.finish(Q,true)}while(false)}if(I==b.mant.length){b.round(Q);I=B}else{if(b.mant[0]==0){return this.ZERO}D=new Array(I);this.arraycopy(b.mant,0,D,0,I);b.mant=D}return b.finish(Q,true)}function bad(B,A){throw B+"Not a number: "+A}function badarg(A,C,B){throw"Bad argument "+C+" to "+A+": "+B}function extend(A,C){var B;if(A.length==C){return A}B=createArrayWithZeros(C);this.arraycopy(A,0,B,0,A.length);return B}function byteaddsub(Q,C,P,N,K,A){var R;var O;var J;var S;var B;var E;var G;var I;var F=0;var D=0;var H;var L=0;R=Q.length;O=P.length;J=C-1;S=N-1;B=S;if(B<J){B=J}E=null;if(A){if((B+1)==R){E=Q}}if(E==null){E=this.createArrayWithZeros(B+1)}G=false;if(K==1){G=true}else{if(K==(-1)){G=true}}I=0;F=B;F:for(;F>=0;F--){if(J>=0){if(J<R){I=I+Q[J]}J--}if(S>=0){if(S<O){if(G){if(K>0){I=I+P[S]}else{I=I-P[S]}}else{I=I+(P[S]*K)}}S--}if(I<10){if(I>=0){quick:do{E[F]=I;I=0;continue F}while(false)}}D=I+90;E[F]=this.bytedig[D];I=this.bytecar[D]}if(I==0){return E}H=null;if(A){if((B+2)==Q.length){H=Q}}if(H==null){H=new Array(B+2)}H[0]=I;var M=B+1;L=0;L:for(;M>0;M--,L++){H[L+1]=E[L]}return H}function diginit(){var A;var C=0;var B=0;A=new Array((90+99)+1);C=0;C:for(;C<=(90+99);C++){B=C-90;if(B>=0){A[C]=(B%10);BigDecimal.prototype.bytecar[C]=(div(B,10));continue C}B=B+100;A[C]=(B%10);BigDecimal.prototype.bytecar[C]=((div(B,10))-10)}return A}function clone(B){var A;A=new BigDecimal();A.ind=B.ind;A.exp=B.exp;A.form=B.form;A.mant=B.mant;return A}function checkdigits(B,A){if(A==0){return }if(this.mant.length>A){if((!(this.allzero(this.mant,A)))){throw"Too many digits: "+this.toString()}}if(B==null){return }if(B.mant.length>A){if((!(this.allzero(B.mant,A)))){throw"Too many digits: "+B.toString()}}return }function round(){var F;var D;if(round.arguments.length==2){F=round.arguments[0];D=round.arguments[1]}else{if(round.arguments.length==1){var I=round.arguments[0];F=I.digits;D=I.roundingMode}else{throw"round(): "+round.arguments.length+" arguments given; expected 1 or 2"}}var J;var B;var A;var G=false;var C=0;var H;var E=null;J=this.mant.length-F;if(J<=0){return this}this.exp=this.exp+J;B=this.ind;A=this.mant;if(F>0){this.mant=new Array(F);this.arraycopy(A,0,this.mant,0,F);G=true;C=A[F]}else{this.mant=this.ZERO.mant;this.ind=this.iszero;G=false;if(F==0){C=A[0]}else{C=0}}H=0;modes:do{if(D==this.ROUND_HALF_UP){if(C>=5){H=B}}else{if(D==this.ROUND_UNNECESSARY){if((!(this.allzero(A,F)))){throw"round(): Rounding necessary"}}else{if(D==this.ROUND_HALF_DOWN){if(C>5){H=B}else{if(C==5){if((!(this.allzero(A,F+1)))){H=B}}}}else{if(D==this.ROUND_HALF_EVEN){if(C>5){H=B}else{if(C==5){if((!(this.allzero(A,F+1)))){H=B}else{if((((this.mant[this.mant.length-1])%2))==1){H=B}}}}}else{if(D==this.ROUND_DOWN){}else{if(D==this.ROUND_UP){if((!(this.allzero(A,F)))){H=B}}else{if(D==this.ROUND_CEILING){if(B>0){if((!(this.allzero(A,F)))){H=B}}}else{if(D==this.ROUND_FLOOR){if(B<0){if((!(this.allzero(A,F)))){H=B}}}else{throw"round(): Bad round value: "+D}}}}}}}}}while(false);if(H!=0){bump:do{if(this.ind==this.iszero){this.mant=this.ONE.mant;this.ind=H}else{if(this.ind==this.isneg){H=-H}E=this.byteaddsub(this.mant,this.mant.length,this.ONE.mant,1,H,G);if(E.length>this.mant.length){this.exp++;this.arraycopy(E,0,this.mant,0,this.mant.length)}else{this.mant=E}}}while(false)}if(this.exp>this.MaxExp){throw"round(): Exponent Overflow: "+this.exp}return this}function allzero(D,C){var B=0;if(C<0){C=0}var A=D.length-1;B=C;B:for(;B<=A;B++){if(D[B]!=0){return false}}return true}function finish(H,D){var G=0;var B=0;var C=null;var E=0;var F=0;if(H.digits!=0){if(this.mant.length>H.digits){this.round(H)}}if(D){if(H.form!=MathContext.prototype.PLAIN){G=this.mant.length;B=G-1;B:for(;B>=1;B--){if(this.mant[B]!=0){break B}G--;this.exp++}if(G<this.mant.length){C=new Array(G);this.arraycopy(this.mant,0,C,0,G);this.mant=C}}}this.form=MathContext.prototype.PLAIN;var A=this.mant.length;B=0;B:for(;A>0;A--,B++){if(this.mant[B]!=0){if(B>0){delead:do{C=new Array(this.mant.length-B);this.arraycopy(this.mant,B,C,0,this.mant.length-B);this.mant=C}while(false)}E=this.exp+this.mant.length;if(E>0){if(E>H.digits){if(H.digits!=0){this.form=H.form}}if((E-1)<=this.MaxExp){return this}}else{if(E<(-5)){this.form=H.form}}E--;if((E<this.MinExp)||(E>this.MaxExp)){overflow:do{if(this.form==MathContext.prototype.ENGINEERING){F=E%3;if(F<0){F=3+F}E=E-F;if(E>=this.MinExp){if(E<=this.MaxExp){break overflow}}}throw"finish(): Exponent Overflow: "+E}while(false)}return this}}this.ind=this.iszero;if(H.form!=MathContext.prototype.PLAIN){this.exp=0}else{if(this.exp>0){this.exp=0}else{if(this.exp<this.MinExp){throw"finish(): Exponent Overflow: "+this.exp}}}this.mant=this.ZERO.mant;return this};