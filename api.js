// API integration and Offline Templates for ÖABT Question Creator

const OFFLINE_QUESTIONS = {
    analiz: [
        {
            kazanim_id: "an_5",
            question: "Let $f(x, y) = \\frac{x^2 y}{x^4 + y^2}$ be a function defined on $\\mathbb{R}^2 \\setminus \\{(0,0)\\}$. Investigating the limit as $(x,y) \\to (0,0)$, along which of the following families of curves does the function approach a value that is dependent on the curve's parameter, thereby proving that the limit does not exist?",
            options: {
                A: "$y = mx$ (Linear paths)",
                B: "$y = kx^2$ (Parabolic paths)",
                C: "$y = mx^3$ (Cubic paths)",
                D: "$y^2 = kx$ (Side-opening parabolas)",
                E: "$y = mx + x^2$ (Mixed quadratic paths)"
            },
            correct_answer: "B",
            solution: "To evaluate $\\lim_{(x, y) \\to (0, 0)} \\frac{x^2 y}{x^4 + y^2}$:<br>1. **If we test linear paths ($y=mx$):**<br>$$\\lim_{x \\to 0} \\frac{x^2 (mx)}{x^4 + (mx)^2} = \\lim_{x \\to 0} \\frac{m x^3}{x^2(x^2 + m^2)} = \\lim_{x \\to 0} \\frac{mx}{x^2 + m^2} = 0$$<br>All straight lines yield a limit of $0$.<br>2. **If we test parabolic paths ($y=kx^2$):**<br>$$\\lim_{x \\to 0} \\frac{x^2 (kx^2)}{x^4 + (kx^2)^2} = \\lim_{x \\to 0} \\frac{k x^4}{x^4 (1 + k^2)} = \\frac{k}{1+k^2}$$<br>The limit value depends directly on the parameter $k$ of the approaching parabola (e.g., $1/2$ along $y=x^2$, and $2/5$ along $y=2x^2$). Since different paths produce different values, the limit does not exist.",
            cognitive_analysis: {
                bloom_level: "Çözümleme (Analysis)",
                solo_level: "İlişkisel (Relational)",
                dok_level: "Düzey 3 (Stratejik Düşünme)",
                theorems_used: ["Çok Değişkenli Limitlerde Yörünge Testi"],
                misconceptions_targeted: ["Doğrusal yollardan limit 0 çıkıyorsa limit her zaman vardır ezberi"],
                originality_rationale: "Bu soru, çok değişkenli limit kavramındaki doğrusal yaklaşım ezberini bozan klasik bir karşıt-örnektir. Öğrencinin dereceleri eşitlemek için parabolik yörüngeleri akıl etmesini gerektirir."
            }
        },
        {
            kazanim_id: "an_3",
            question: "Let $f: [0, 1] \\to \\mathbb{R}$ be a continuous function on $[0,1]$ and differentiable on $(0,1)$ such that $f(0) = f(1) = 0$. Which auxiliary function should be defined to prove that there exists a point $c \\in (0, 1)$ satisfying $f'(c) + 2c f(c) = 0$ using Rolle's Theorem?",
            options: {
                A: "$g(x) = e^x f(x)$",
                B: "$g(x) = e^{-x^2} f(x)$",
                C: "$g(x) = e^{x^2} f(x)$",
                D: "$g(x) = x^2 f(x)$",
                E: "$g(x) = \\ln(x) f(x)$"
            },
            correct_answer: "C",
            solution: "We want to show that $f'(c) + 2cf(c) = 0$ for some $c \\in (0,1)$.<br>1. Consider the expression $f'(x) + 2xf(x)$. If we multiply this by an integrating factor $\\mu(x) = e^{x^2}$, we notice:<br>$$e^{x^2}(f'(x) + 2xf(x)) = \\frac{d}{dx} [e^{x^2} f(x)]$$<br>2. Let us define the auxiliary function $g(x) = e^{x^2} f(x)$.<br>3. Check the conditions of Rolle's Theorem for $g(x)$ on $[0, 1]$:<br>- $g(x)$ is continuous on $[0, 1]$ (product of continuous functions).<br>- $g(x)$ is differentiable on $(0, 1)$.<br>- $g(0) = e^0 f(0) = 0$ and $g(1) = e^1 f(1) = 0$. Therefore, $g(0) = g(1)$.<br>4. By Rolle's Theorem, there exists $c \\in (0, 1)$ such that $g'(c) = 0$.<br>$$g'(c) = e^{c^2} f'(c) + 2c e^{c^2} f(c) = e^{c^2}(f'(c) + 2c f(c)) = 0$$<br>Since $e^{c^2} \\neq 0$, it follows that $f'(c) + 2c f(c) = 0$. Thus, $g(x) = e^{x^2}f(x)$ is the correct auxiliary function.",
            cognitive_analysis: {
                bloom_level: "Yaratma (Creation - Model Tasarlama)",
                solo_level: "Soyutlanmış İlişkisel (Extended Abstract)",
                dok_level: "Düzey 4 (Derinlemesine Düşünme)",
                theorems_used: ["Rolle Teoremi", "İntegral Çarpanı Metodu"],
                misconceptions_targeted: ["Rolle teoreminin sadece f'(c)=0 durumlarında uygulanacağı yanılgısı"],
                originality_rationale: "Yardımcı fonksiyon kurma, Kalkülüs ispatlarındaki en yaratıcı süreçlerden biridir. Diferansiyel denklem integral çarpanı mantığı ile Rolle teoremini sentezler."
            }
        }
    ],
    cebir: [
        {
            kazanim_id: "cb_3",
            question: "Let $A$ be a $3 \\times 3$ real matrix satisfying the relation $A^3 - A^2 - A + I_3 = 0$. If $\\det(A) = -1$, what is the trace of $A^2$?",
            options: {
                A: "1",
                B: "2",
                C: "3",
                D: "4",
                E: "5"
            },
            correct_answer: "C",
            solution: "1. The minimal polynomial or annihilating polynomial of $A$ divides $p(t) = t^3 - t^2 - t + 1$.<br>Let's factorize $p(t)$:<br>$$t^3 - t^2 - t + 1 = t^2(t-1) - (t-1) = (t^2 - 1)(t-1) = (t-1)^2(t+1)$$<br>2. Therefore, the eigenvalues of $A$ can only be chosen from the roots of $p(t) = 0$, which are $\\lambda = 1$ (multiplicity up to 2) and $\\lambda = -1$ (multiplicity up to 3).<br>3. Since $A$ is a $3 \\times 3$ matrix, it has exactly 3 eigenvalues (counted with algebraic multiplicity): $\\lambda_1, \\lambda_2, \\lambda_3$.<br>4. The determinant is the product of eigenvalues: $\\det(A) = \\lambda_1 \\lambda_2 \\lambda_3 = -1$.<br>Since each $\\lambda_i \\in \\{1, -1\\}$, the only way to get a product of $-1$ is if we have:<br>- One eigenvalue is $-1$ and two eigenvalues are $1$ (eigenvalues: $1, 1, -1$), OR<br>- All three eigenvalues are $-1$ (eigenvalues: $-1, -1, -1$).<br>5. Let's check both cases for the trace of $A^2$. The eigenvalues of $A^2$ are $\\lambda_1^2, \\lambda_2^2, \\lambda_3^2$.<br>Since $\\lambda_i \\in \\{1, -1\\}$, we have $\\lambda_i^2 = 1$ for all $i$.<br>6. Therefore, the eigenvalues of $A^2$ are $1, 1, 1$.<br>The trace of $A^2$ is the sum of its eigenvalues:<br>$$\\text{Tr}(A^2) = 1 + 1 + 1 = 3$$",
            cognitive_analysis: {
                bloom_level: "Çözümleme (Analysis)",
                solo_level: "İlişkisel (Relational)",
                dok_level: "Düzey 3 (Stratejik Düşünme)",
                theorems_used: ["Spektral Teorem / Özdeğer Teoremi", "Cayley-Hamilton / İndirgenemez Polinom"],
                misconceptions_targeted: ["Determinant ile özdeğer çarpanları arasındaki ilişkiyi kuramama", "A matrisini bulmaya çalışarak vakit kaybetme"],
                originality_rationale: "Bu soru, adayı matris elemanlarıyla işlem yapmak yerine özdeğerlerin cebirsel yapısını ve karakteristik polinom ilişkilerini analiz etmeye zorlar."
            }
        },
        {
            kazanim_id: "cb_2",
            question: "Let $G = (\\mathbb{Z}_{18}, +)$ and $H = (\\mathbb{Z}_{30}, +)$ be additive cyclic groups. How many different group homomorphisms $\\phi: G \\to H$ can be defined?",
            options: {
                A: "2",
                B: "6",
                C: "18",
                D: "30",
                E: "90"
            },
            correct_answer: "B",
            solution: "1. **Theorem:** The number of group homomorphisms from $\\mathbb{Z}_m$ to $\\mathbb{Z}_n$ is equal to the greatest common divisor (GCD) of $m$ and $n$.<br>$$\\text{Number of Homomorphisms} = \\gcd(m, n)$$<br>2. Here we have $m = 18$ and $n = 30$.<br>3. Calculate $\\gcd(18, 30)$:<br>- Divisors of 18: 1, 2, 3, 6, 9, 18<br>- Divisors of 30: 1, 2, 3, 5, 6, 10, 15, 30<br>- $\\gcd(18, 30) = 6$.<br>4. Therefore, exactly 6 different homomorphisms can be defined. Each homomorphism is uniquely determined by the image of the generator $1 \\in \\mathbb{Z}_{18}$, which must map to an element in $\\mathbb{Z}_{30}$ whose order divides $\\gcd(18, 30)$.",
            cognitive_analysis: {
                bloom_level: "Uygulama (Application)",
                solo_level: "Çok Yönlü (Multi-structural)",
                dok_level: "Düzey 2 (Beceri/Kavramsal)",
                theorems_used: ["Devirli Gruplarda Homomorfizma Teoremi"],
                misconceptions_targeted: ["Grup homomorfizmasını eleman eleman eşleyerek bulmaya çalışıp vakit kaybetme"],
                originality_rationale: "Devirli grupların yapısal üreteç özelliklerini ve GCD arasındaki aritmetik bağıntıyı birleştiren, ÖABT sınavlarında ayırt edici bir soru şablonudur."
            }
        },
        {
            kazanim_id: "cb_1",
            question: "Adayların modüler aritmetik konusundaki ezberlerini bozmak isteyen bir soru yazarı şu soruyu kurguluyor: <br> $x \\equiv 2 \\pmod 3$ <br> $x \\equiv 3 \\pmod 5$ <br> $x \\equiv 2 \\pmod 7$ <br> denklik sistemini sağlayan en küçük pozitif $x$ tam sayısının rakamları toplamı kaçtır?",
            options: {
                A: "5",
                B: "8",
                C: "11",
                D: "14",
                E: "17"
            },
            correct_answer: "A",
            solution: "Bu soru Çin Kalan Teoremi (Chinese Remainder Theorem) yardımıyla çözülebilir. <br>1. **Sistemin Yapısı:** <br> $m_1 = 3$, $m_2 = 5$, $m_3 = 7$ modları aralarında asaldır. Toplam mod $M = 3 \\cdot 5 \\cdot 7 = 105$'dir. <br>2. **Denklemleri Çözme:** <br> Birinci ve üçüncü denklemlere baktığımızda: $x \\equiv 2 \\pmod 3$ ve $x \\equiv 2 \\pmod 7$. <br> Buradan $x \\equiv 2 \\pmod{21}$ elde edilir. Yani $x = 21k + 2$ formundadır. <br>3. **İkinci Denklemle Birleştirme:** <br> $21k + 2 \\equiv 3 \\pmod 5$ <br> $21 \\equiv 1 \\pmod 5$ olduğundan, $k + 2 \\equiv 3 \\pmod 5 \\implies k \\equiv 1 \\pmod 5$ bulunur. <br> En küçük pozitif $k$ değeri için $k = 1$ seçilirse: <br> $x = 21(1) + 2 = 23$. <br>4. **Doğrulama:** <br> $23 \\equiv 2 \\pmod 3$ (Doğru) <br> $23 \\equiv 3 \\pmod 5$ (Doğru) <br> $23 \\equiv 2 \\pmod 7$ (Doğru) <br>5. **Rakamlar Toplamı:** <br> $2 + 3 = 5$ olup doğru cevap A seçeneğidir.",
            cognitive_analysis: {
                bloom_level: "Uygulama (Application - İşlemsel Bilgi)",
                solo_level: "Çok Yönlü (Multi-structural)",
                dok_level: "Düzey 2 (Beceri/Kavramsal)",
                theorems_used: ["Çin Kalan Teoremi (CRT)", "Aritmetik Kalan Analizi"],
                misconceptions_targeted: ["Çin Kalan Teoremi'ni sadece uzun formüllere bağlı kalarak çözmeye çalışıp pratik yolları görememe"],
                originality_rationale: "Bu soru, standart Çin Kalan Teoremi formülü yerine iki modun kalanının eşit olmasından yararlanan pratik ve hızlı bir kavramsal analiz yolu sunmaktadır."
            }
        }
    ],
    geometri: [
        {
            kazanim_id: "geo_3",
            question: "In 3D space $\\mathbb{R}^3$, the parametric equations of two skew lines are given by:<br>$d_1: (x,y,z) = (1+t, 2-t, 3t)$ and $d_2: (x,y,z) = (2s, 1+s, -s)$.<br>What is the shortest distance between these two lines?",
            options: {
                A: "$\\frac{3}{\\sqrt{62}}$ units",
                B: "$\\frac{5}{\\sqrt{62}}$ units",
                C: "$\\frac{5}{\\sqrt{14}}$ units",
                D: "$\\frac{1}{\\sqrt{14}}$ units",
                E: "$\\frac{7}{\\sqrt{62}}$ units"
            },
            correct_answer: "B",
            solution: "1. **Direction vectors of the lines:**<br>For $d_1$: $\\vec{u} = (1, -1, 3)$<br>For $d_2$: $\\vec{v} = (2, 1, -1)$<br>2. **Common normal vector (cross product of direction vectors):**<br>$$\\vec{n} = \\vec{u} \\times \\vec{v} = \\det \\begin{bmatrix} \\vec{i} & \\vec{j} & \\vec{k} \\\\ 1 & -1 & 3 \\\\ 2 & 1 & -1 \\end{bmatrix}$$<br>$$\\vec{n} = \\vec{i}(1 - 3) - \\vec{j}(-1 - 6) + \\vec{k}(1 + 2) = (-2, 7, 3)$$<br>3. **Choose a point on each line:**<br>On $d_1$ (let $t=0$): $A(1, 2, 0)$<br>On $d_2$ (let $s=0$): $B(0, 1, 0)$<br>Vector connecting them: $\\vec{AB} = B - A = (-1, -1, 0)$<br>4. **Shortest distance formula (projection of $\\vec{AB}$ onto the normal $\\vec{n}$):**<br>$$\\text{Distance} = \\frac{|\\vec{AB} \\cdot \\vec{n}|}{\\|\\vec{n}\\|} = \\frac{|(-1)(-2) + (-1)(7) + (0)(3)|}{\\sqrt{(-2)^2 + 7^2 + 3^2}}$$<br>$$\\text{Distance} = \\frac{|2 - 7|}{\\sqrt{4 + 49 + 9}} = \\frac{5}{\\sqrt{62}}\\text{ units.}$$",
            cognitive_analysis: {
                bloom_level: "Analiz (Analysis)",
                solo_level: "İlişkisel (Relational)",
                dok_level: "Düzey 3 (Stratejik Düşünme)",
                theorems_used: ["Vektörel Çarpım ve Karma Çarpımın Geometrik Anlamı", "İzdüşüm Vektörü Bağıntısı"],
                misconceptions_targeted: ["Aykırı doğruları kesişiyor veya paralel zannedip mesafe hesaplayamama"],
                originality_rationale: "Bu soru, 3 boyutlu uzayda doğruların konumlarını hayal etmeyi ve vektörel izdüşüm ile ortak normal kavramlarını bütünleştirmeyi gerektirir."
            },
            svg_geometry: "<svg viewBox='0 0 300 160' width='100%' height='160' style='max-width:300px;'><polygon points='20,30 180,30 150,75 10,75' fill='none' stroke='currentColor' stroke-width='1' stroke-dasharray='3,3' opacity='0.4'/><polygon points='120,75 280,75 250,120 110,120' fill='none' stroke='currentColor' stroke-width='1' stroke-dasharray='3,3' opacity='0.4'/><line x1='30' y1='40' x2='160' y2='65' stroke='currentColor' stroke-width='2'/><text x='165' y='65' fill='currentColor' font-size='11'>d₁</text><line x1='120' y1='110' x2='260' y2='85' stroke='currentColor' stroke-width='2'/><text x='265' y='85' fill='currentColor' font-size='11'>d₂</text><line x1='95' y1='52' x2='190' y2='97' stroke='currentColor' stroke-width='1.5' stroke-dasharray='3,3'/><path d='91,54 L94,59 L98,57' fill='none' stroke='currentColor' stroke-width='1'/><path d='186,95 L189,100 L193,98' fill='none' stroke='currentColor' stroke-width='1'/><text x='130' y='70' fill='currentColor' font-size='10' font-style='italic'>mesafe</text></svg>"
        }
    ],
    uygulamali_matematik: [
        {
            kazanim_id: "um_3",
            question: "An integrating factor for the differential equation $(3xy + y^2)dx + (x^2 + xy)dy = 0$ is known to be of the form $\\mu(x,y) = x^a y^b$. What is the value of the product $a \\cdot b$?",
            options: {
                A: "-2",
                B: "-1",
                C: "0",
                D: "1",
                E: "2"
            },
            correct_answer: "C",
            solution: "1. Let $M(x,y) = 3xy + y^2$ and $N(x,y) = x^2 + xy$.<br>Multiply by the integrating factor $\\mu(x,y) = x^a y^b$:<br>$$(3x^{a+1}y^{b+1} + x^a y^{b+2})dx + (x^{a+2}y^b + x^{a+1}y^{b+1})dy = 0$$<br>2. For this equation to be exact, we must have $\\frac{\partial M_{new}}{\partial y} = \\frac{\partial N_{new}}{\partial x}$:<br>$$\\frac{\partial M_{new}}{\partial y} = 3(b+1)x^{a+1}y^b + (b+2)x^a y^{b+1}$$<br>$$\\frac{\partial N_{new}}{\partial x} = (a+2)x^{a+1}y^b + (a+1)x^a y^{b+1}$$<br>3. Equating the coefficients of identical power terms:<br>- For $x^{a+1}y^b$: $3(b+1) = a+2 \\implies a - 3b = 1$<br>- For $x^a y^{b+1}$: $b+2 = a+1 \\implies a - b = 1$<br>4. Solving this linear system:<br>Subtracting the first equation from the second: $2b = 0 \\implies b = 0$.<br>Plugging $b=0$ back: $a = 1$.<br>5. The integrating factor is $\\mu(x,y) = x^1 y^0 = x$.<br>The product $a \\cdot b = 1 \\cdot 0 = 0$.",
            cognitive_analysis: {
                bloom_level: "Uygulama (Application)",
                solo_level: "Çok Yönlü (Multi-structural)",
                dok_level: "Düzey 2 (Beceri/Kavramsal)",
                theorems_used: ["Tam Diferansiyel Denklemler", "İntegral Çarpanı Yöntemi"],
                misconceptions_targeted: ["İntegral çarpanının sadece tek değişkene bağlı olabileceği önyargısı"],
                originality_rationale: "Adayı formül ezberlemek yerine tam diferansiyel şartının kısmi türev eşitliğine dayanan tanımını yapmaya ve katsayı eşitlemeye yönlendirir."
            }
        },
        {
            kazanim_id: "um_1",
            question: "A certain genetic condition occurs in 1 out of 1000 people. A diagnostic test is 99% accurate when a person has the condition, and has a 2% false-positive rate. If a randomly selected person tests positive, what is the probability they actually have the condition?",
            options: {
                A: "99%",
                B: "4.7%",
                C: "2%",
                D: "0.1%",
                E: "95.3%"
            },
            correct_answer: "B",
            solution: "We will use **Bayes' Theorem** to find $P(\\text{Condition} \\mid \\text{Positive})$.<br>1. Define probabilities:<br>- $P(\\text{Condition}) = 0.001$ (Prior probability of having the disease)<br>- $P(\\text{Healthy}) = 0.999$<br>- $P(\\text{Positive} \\mid \\text{Condition}) = 0.99$ (Sensitivity)<br>- $P(\\text{Positive} \\mid \\text{Healthy}) = 0.02$ (False positive rate)<br>2. Find total probability of testing positive $P(\\text{Positive})$:<br>$$P(\\text{Positive}) = P(\\text{Positive} \\mid \\text{Condition})P(\\text{Condition}) + P(\\text{Positive} \\mid \\text{Healthy})P(\\text{Healthy})$$<br>$$P(\\text{Positive}) = (0.99 \\times 0.001) + (0.02 \\times 0.999) = 0.00099 + 0.01998 = 0.02097$$<br>3. Apply Bayes' Theorem:<br>$$P(\\text{Condition} \\mid \\text{Positive}) = \\frac{P(\\text{Positive} \\mid \\text{Condition})P(\\text{Condition})}{P(\\text{Positive})}$$<br>$$P(\\text{Condition} \\mid \\text{Positive}) = \\frac{0.00099}{0.02097} \\approx 0.0472 \\text{ or } 4.72\\%$$<br>Even with a 99% accurate test, because the condition is so rare, a positive test only translates to a $4.7\\%$ chance of actually having the condition.",
            cognitive_analysis: {
                bloom_level: "Kavrama (Comprehension)",
                solo_level: "İlişkisel (Relational)",
                dok_level: "Düzey 2 (Beceri/Kavramsal)",
                theorems_used: ["Bayes Teoremi", "Toplam Olasılık Teoremi"],
                misconceptions_targeted: ["Testin doğruluğu %99 ise pozitif çıkan birinin kesinlikle hasta olacağını zannetme (Temel Oran Yanılgısı)"],
                originality_rationale: "Günlük hayattaki Bayesci olasılık yanılsamalarını sorgulayan, ezbere olasılık formüllerinin ötesinde sezgisel kavrayış ölçen bir sorudur."
            }
        }
    ],
    alan_egitimi: [
        {
            kazanim_id: "ae_1",
            question: "A high school mathematics teacher observes a student who can mentally compute $f(5) = 13$ in $f(x)=2x+3$ step-by-step. However, the student struggles to conceive of $f(x)$ as a complete, unified mathematical entity onto which operations like finding the inverse or adding to another function can be applied. According to APOS Theory, at which cognitive stage is this student?",
            options: {
                A: "Action (Eylem)",
                B: "Process (İşlem)",
                C: "Object (Nesne)",
                D: "Schema (Şema)",
                E: "Extended Abstract (Soyutlanmış)"
            },
            correct_answer: "B",
            solution: "APOS (Action-Process-Object-Schema) theory evaluates mental constructions:<br>1. **Action (Eylem):** Relies on external cues, step-by-step physical calculations. A student can only evaluate a function by plug-in numbers.<br>2. **Process (İşlem):** The student has internalized the actions. They can mentally perform the steps and describe the inputs/outputs relationship without needing to physically write it down. (The student in the question is here; they mentally compute the result but cannot treat the function as a standalone thing).<br>3. **Object (Nesne):** The student views the process as a whole, a unified entity. They can perform operations *on* the function itself (e.g. adding two functions, composition, finding inverses).<br>4. **Schema (Şema):** A collection of actions, processes, and objects organized in a coherent framework.<br>Therefore, the student is at the **Process (İşlem)** stage.",
            cognitive_analysis: {
                bloom_level: "Analiz (Analysis - Kavramsal Teşhis)",
                solo_level: "İlişkisel (Relational)",
                dok_level: "Düzey 3 (Stratejik Düşünme)",
                theorems_used: ["APOS Teorisi Bilişsel Düzey Analizi"],
                misconceptions_targeted: ["APOS evrelerinin tanımlarını ezberleyip sınıf içi diyaloglara uyarlayamama"],
                originality_rationale: "Bu soru, öğretmen adayının matematik eğitimi kuramlarını ezberci bir şekilde değil, öğrenci diyaloglarını ve zihinsel aşamalarını teşhis edebilecek düzeyde kavramasını ölçer."
            }
        }
    ]
};

// Formats a prompt for Gemini model
function buildSystemPrompt() {
    return `Sen, ÖSYM tarafından düzenlenen Öğretmenlik Alan Bilgisi Testi (ÖABT) İlköğretim ve Lise Matematik öğretmenliği sınavları için özgün, yaratıcı ve kavramsal derinliği olan sorular hazırlayan uzman bir Akademik Soru Hazırlama Komisyonu Üyesisin.
Görevin, ezberci çözümleri aşan, adayın matematiksel kavramları ne kadar derinlemesine anladığını, teoremleri ve bilişsel modelleri nasıl ilişkilendirdiğini ölçen sorular hazırlamaktır.

Ürettiğin çıktıyı KESİNLİKLE sadece ve sadece geçerli bir JSON formatında döndürmelisin. JSON yapısı tam olarak aşağıdaki gibi olmalıdır:
{
  "question": "Soru metni (Türkçe ve KaTeX formatında)",
  "options": {
    "A": "A seçeneği",
    "B": "B seçeneği",
    "C": "C seçeneği",
    "D": "D seçeneği",
    "E": "E seçeneği"
  },
  "correct_answer": "Doğru seçenek (A, B, C, D veya E)",
  "solution": "Adım adım detaylı çözüm ve açıklama (KaTeX formatında)",
  "cognitive_analysis": {
    "bloom_level": "Yenilenmiş Bloom basamağı ve bilgi boyutu (örneğin: Çözümleme - Kavramsal Bilgi)",
    "solo_level": "SOLO Taksonomisi düzeyi (Tek Yönlü / Çok Yönlü / İlişkisel / Soyutlanmış İlişkisel)",
    "dok_level": "Webb DOK düzeyi (Düzey 1 / Düzey 2 / Düzey 3 / Düzey 4)",
    "theorems_used": ["Kullanılan Teorem 1", "Kullanılan Teorem 2"],
    "misconceptions_targeted": ["Adayların bu soruda düşebileceği kavram yanılgısı 1", "Sık yapılan hata 2"],
    "originality_rationale": "Bu sorunun neden özgün olduğu, hangi ezberi bozduğu ve yaratıcı yönü"
  },
  "svg_geometry": "Soruya ait geometrik şekil veya fonksiyon grafiği çizimi (SVG formatında, sadece ve sadece <svg viewBox='0 0 300 200' ...>...</svg> etiketleri olarak. Şekillerin kenarları için stroke='currentColor', yazılar için fill='currentColor', dolgular için fill='none' veya yarı-saydam opacity değerleri kullanarak aydınlık/karanlık temaya uyum sağlanmalıdır. Köşe harfleri ve kenar uzunlukları <text> etiketleriyle yerleştirilmelidir. Geometri sorularında bu alan zorunludur, diğer sorularda gerekmiyorsa boş bırakılabilir veya kaldırılabilir.)"
}

Kurallar:
1. Matematiksel terimleri ve formülleri yazarken mutlaka LaTeX/KaTeX sintaksını kullanmalısın.
   - Satır içi matematik formülleri için tek dolar sembolü kullan: $x^2 + y^2 = r^2$
   - Blok formüller için çift dolar sembolü kullan: $$f'(x) = \\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h}$$
   - Matematiksel olmayan ve formül dışı kelimeleri kalın (bold) yapmak için **ASLA** LaTeX'teki \\textbf{...} komutunu kullanma. Bunun yerine HTML etiketleri olan <b>...</b> veya <strong>...</strong> kullan. İtalik yapmak için <i>...</i> kullan. LaTeX yazı biçimlendirme komutlarını ($ sembolleri dışındaki düz metinlerde) kesinlikle kullanma.
   - Pozitif tam sayılar kümesini yazarken \\mathbb{Z}^1 gibi hatalı gösterimler kullanma; her zaman standart ve doğru olan \\mathbb{Z}^+ gösterimini tercih et.
2. Zorluk Derecesi ve Bilişsel Derinlik Standartları:
   - **Kolay (Easy)**: Temel kavramsal tanımları ve teoremlerin doğrudan tek adımlı uygulamasını ölçen öğretici sorular.
   - **Orta (Medium)**: Birden fazla adımı içeren, iki farklı kavram veya teoremi birleştiren, hem işlemsel yeteneği hem de mantıksal çıkarımı dengeli şekilde sınayan standart ÖSYM ÖABT düzeyindeki sorular.
   - **Zor (Hard)**: Üst düzey analiz, sentez ve değerlendirme gerektiren; adayın ezber formüllerle çözemeyeceği, teorem sınır koşullarını (örneğin süreklilik/türevlenebilirlik ihlalleri), karşıt örnekleri (counter-examples) veya özel fonksiyon yapılarının limit/türev/integral durumlarını irdeleyen, derinliği olan ayırt edici ve özgün sorular.
3. Özgünlük ve Ezber Bozma Kriterleri:
   - Alışılmış ve rutin (piyasa kitaplarındaki sayıları değiştirilmiş) soru kalıplarından uzak dur. Sorular, adayın matematiksel yapıları ve teoremlerin arkasındaki mantığı ("neden" çalıştığını) anlamasını test etmelidir.
   - Alan Eğitimi alanında; öğrencilerin kavram yanılgılarını, zihinsel şemalarını (APOS eylem-işlem, SOLO, Van Hiele vb.) ve düştükleri kavramsal çelişkileri içeren gerçekçi sınıf içi diyalogları, öğrenci hatalarını ve tanılayıcı kurguları temel alarak özgün senaryolar hazırla.
4. Teorem Entegrasyonu ve Bilimsel Kesinlik:
   - Belirtilen teoremler (örneğin Rolle, Ortalama Değer Teoremi, Riemann, Cayley-Hamilton, Green vb.) soruda sadece süs veya arka plan bilgisi olarak kalmamalı, sorunun çözümünün ana mantıksal omurgasını oluşturmalıdır.
   - Çözüm (solution) kısmında, teoremin hangi aşamada, neden ve nasıl kullanıldığı adım adım, matematiksel ve pedagojik bir kesinlikle açıklanmalıdır. Soruda yer alan tüm limit yönleri, fonksiyon tanım/değer kümeleri ve sınır koşulları bilimsel açıdan %100 kusursuz olmalıdır.
5. Nitelikli Çeldirici (Seçenek) Tasarım Kuralları:
   - Yanlış seçenekleri (A, B, C, D, E) asla rastgele sayılardan seçme. Her çeldirici, adayların yapabileceği olası bir işlemsel hata (örn: integral sınırlarını ters yazma, türevde zincir kuralını unutma, süreksizlik noktasını gözden kaçırma) veya kavram yanılgısını (örn: APOS evrelerini birbirine karıştırma) temsil etmelidir.
   - Pedagojik analiz bölümünde, yanlış seçeneklerin hangi yaygın hatalara veya yanılgılara dayandığını açıkça belirt.
6. Dil bilgisi ve imla kurallarına dikkat et. Soruyu akademik, açık ve anlaşılır bir Türkçe ile yaz.
5. SVG Geometrik Şekil ve Grafik Çizim Kuralları:
   - **Köşe ve Çizgi Birleşimleri (Fiyonk/Kurdele Hatası Engeli)**: Şekilleri çizerken köşe noktalarına (vertex'lere) gereksiz ok uçları (marker) veya karmaşık marker tanımları ekleme. Çizgiler köşelerde temiz ve düz birleşmelidir. Köşe noktalarını vurgulamak istersen sadece küçük bir dolu daire (<circle cx="..." cy="..." r="3" fill="currentColor"/>) kullan. Açıları işaretleyen yayların koordinatlarını ve yarıçaplarını doğru hesapla; üst üste binip fiyonk veya kurdele benzeri garip karmaşık şekiller oluşturmasına izin verme.
   - **Fonksiyon Grafikleri ve Eğriler (Dolgu Hatası Engeli)**: Grafikleri, eğrileri (parabol, kübik eğri vb.) veya çizgileri \"<path>\" ya da \"<polyline>\" kullanarak çizerken **mutlaka fill=\"none\"** parametresini kullan. \"fill\" parametresini belirtmezsen tarayıcı eğrinin başlangıç ve bitiş noktaları arasını katı bir renkle doldurur ve ekranda kocaman anlamsız renkli lekeler oluşur. Alan taraması yapılması gerekmiyorsa eğrilerin içini asla doldurma! Alan taraması gerekiyorsa sadece çok düşük şeffaflıkta (\"opacity=\\\"0.1\\\"\") ve \"fill=\\\"currentColor\\\"\" ile sınırlandırılmış dolgular kullan.
   - **Koordinat Eksenleri ve Izgara (Grid) Düzeni**: Koordinat eksenlerini ince düz çizgiler olarak çiz (\"stroke-width=\\\"1.5\\\"\"). Izgara çizgilerini (grid) kesinlikle kalın çubuklar, şeritler veya katı dikdörtgenler şeklinde çizme! Izgara çizgileri çok ince (\"stroke-width=\\\"0.5\\\"\"), kesikli (\"stroke-dasharray=\\\"2,4\\\"\") ve çok yüksek şeffaflıkta (\"stroke=\\\"currentColor\\\" opacity=\\\"0.15\\\"\") olmalıdır.
   - **Metin ve Değer Yerleşimleri (Çakışma Engeli)**: Kenar uzunlukları, açılar veya fonksiyon isimleri gibi metinlerin çizgi ve şekillerin üstüne binmesini önlemek için, \"<text>\" etiketlerinin x ve y konumlarına çizgi koordinatından en az 8-12 piksel kaydırma (offset) ver. Metinlerin okunabilir olmasını sağla.`;
}

function buildSimilarSystemPrompt() {
    return `Sen, ÖSYM tarafından düzenlenen Öğretmenlik Alan Bilgisi Testi (ÖABT) İlköğretim ve Lise Matematik öğretmenliği sınavları için çıkmış sınav sorularına (AÖF/ÖABT) paralel ve benzer sorular hazırlayan uzman bir Akademik Soru Hazırlama Komisyonu Üyesisin.
Görevin, adayın seçtiği kazanıma ve belirtilen parametrelere uygun olarak, ÖSYM'nin geçmiş yıllarda sorduğu çıkmış soruların matematiksel mantığına, zorluk derecesine ve kurgusuna tam anlamıyla paralel (benzer) bir soru hazırlamaktır.

Ürettiğin soru, geçmiş sınav sorularının birebir kopyası olmamalı, ancak adayın o çıkmış sorudaki anahtar kazanımı, çözüm yöntemini ve teorik derinliği pratik edebilmesi için birebir aynı zorluk düzeyinde ve benzer kurguda olmalıdır.

Ürettiğin çıktıyı KESİNLİKLE sadece ve sadece geçerli bir JSON formatında döndürmelisin. JSON yapısı tam olarak aşağıdaki gibi olmalıdır:
{
  "question": "Soru metni (Türkçe ve KaTeX formatında)",
  "options": {
    "A": "A seçeneği",
    "B": "B seçeneği",
    "C": "C seçeneği",
    "D": "D seçeneği",
    "E": "E seçeneği"
  },
  "correct_answer": "Doğru seçenek (A, B, C, D veya E)",
  "solution": "Adım adım detaylı çözüm ve açıklama (KaTeX formatında)",
  "cognitive_analysis": {
    "bloom_level": "Yenilenmiş Bloom basamağı ve bilgi boyutu (örneğin: Çözümleme - Kavramsal Bilgi)",
    "solo_level": "SOLO Taksonomisi düzeyi (Tek Yönlü / Çok Yönlü / İlişkisel / Soyutlanmış İlişkisel)",
    "dok_level": "Webb DOK düzeyi (Düzey 1 / Düzey 2 / Düzey 3 / Düzey 4)",
    "theorems_used": ["Kullanılan Teorem 1", "Kullanılan Teorem 2"],
    "misconceptions_targeted": ["Adayların bu soruda düşebileceği kavram yanılgısı 1", "Sık yapılan hata 2"],
    "originality_rationale": "Bu sorunun çıkmış hangi soru kalıbına paralel tasarlandığı ve benzerlik kurgusu"
  },
  "svg_geometry": "Soruya ait geometrik şekil veya fonksiyon grafiği çizimi (SVG formatında, sadece ve sadece <svg viewBox='0 0 300 200' ...>...</svg> etiketleri olarak. Şekillerin kenarları için stroke='currentColor', yazılar için fill='currentColor', dolgular için fill='none' veya yarı-saydam opacity değerleri kullanarak aydınlık/karanlık temaya uyum sağlanmalıdır. Köşe harfleri ve kenar uzunlukları <text> etiketleriyle yerleştirilmelidir. Geometri sorularında bu alan zorunludur, diğer sorularda gerekmiyorsa boş bırakılabilir veya kaldırılabilir.)"
}

Kurallar:
1. Matematiksel terimleri ve formülleri yazarken mutlaka LaTeX/KaTeX sintaksını kullanmalısın.
   - Satır içi matematik formülleri için tek dolar sembolü kullan: $x^2 + y^2 = r^2$
   - Blok formüller için çift dolar sembolü kullan: $$f'(x) = \\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h}$$
   - Matematiksel olmayan ve formül dışı kelimeleri kalın (bold) yapmak için **ASLA** LaTeX'teki \\textbf{...} komutunu kullanma. Bunun yerine HTML etiketleri olan <b>...</b> veya <strong>...</strong> kullan. İtalik yapmak için <i>...</i> kullan. LaTeX yazı biçimlendirme komutlarını ($ sembolleri dışındaki düz metinlerde) kesinlikle kullanma.
   - Pozitif tam sayılar kümesini yazarken \\mathbb{Z}^1 gibi hatalı gösterimler kullanma; her zaman standart ve doğru olan \\mathbb{Z}^+ gösterimini tercih et.
2. Zorluk Derecesi ve Bilişsel Derinlik Standartları:
   - **Kolay (Easy)**: Temel kavramsal tanımları ve çıkmış kolay seviyedeki ÖSYM sorularının doğrudan tek adımlı uygulamasını ölçen paralel sorular.
   - **Orta (Medium)**: Birden fazla adımı içeren, çıkmış standart ÖSYM ÖABT düzeyindeki soruların kurgusuna paralel pratik soruları.
   - **Zor (Hard)**: Üst düzey analiz ve değerlendirme gerektiren; ÖSYM'nin geçmiş yıllarda sorduğu en seçici, ayırt edici ve derece yaptıran zor sorularının (örneğin iki değişkenli limitlerde parabolik yollar, soyut cebir homomorfizma kurguları, vektörel izdüşümler vb.) mantığına birebir paralel ve benzer kurguda özgün zor sorular.
3. Çıkmış Soru Benzerliği Kriterleri:
   - Ürettiğin soru, geçmiş sınav sorularının birebir kopyası (aynı sayılarla) olmamalıdır.
   - Soru, adayların çıkmış soruların çözümünde kullanılan anahtar kazanımı, cebirsel numarayı (örneğin Riemann toplamında özel aralık bölüntüleri, grup yapılarında Lagrange teoremi kullanımı) pratik edebileceği şekilde, benzer zorluk düzeyinde ve benzer soru kurgusunda olmalıdır.
   - Soru metni ÖSYM'nin çıkmış sorularında kullandığı dile ve üsluba birebir uymalıdır.
4. Teorem Entegrasyonu ve Bilimsel Kesinlik:
   - Belirtilen teoremler soruda çözümün ana mantıksal omurgasını oluşturmalı, çözüm kısmında teoremin kullanımı adım adım açıklanmalıdır. Tüm tanım kümeleri ve limit yönleri bilimsel olarak kusursuz olmalıdır.
5. Nitelikli Çeldirici (Seçenek) Tasarım Kuralları:
   - Yanlış seçenekleri asla rastgele sayılardan seçme. Her çeldirici, adayların yapabileceği olası bir işlemsel hata (örn: integral sınırlarını ters yazma, türevde zincir kuralını unutma, süreksizlik noktasını gözden kaçırma) veya kavram yanılgısını (örn: APOS evrelerini birbirine karıştırma) temsil etmelidir.
6. Dil bilgisi ve imla kurallarına dikkat et. Soruyu akademik, açık ve anlaşılır bir Türkçe ile yaz.
5. SVG Geometrik Şekil ve Grafik Çizim Kuralları:
   - **Köşe ve Çizgi Birleşimleri (Fiyonk/Kurdele Hatası Engeli)**: Şekilleri çizerken köşe noktalarına (vertex'lere) gereksiz ok uçları (marker) veya karmaşık marker tanımları ekleme. Çizgiler köşelerde temiz ve düz birleşmelidir. Köşe noktalarını vurgulamak istersen sadece küçük bir dolu daire (<circle cx="..." cy="..." r="3" fill="currentColor"/>) kullan. Açıları işaretleyen yayların koordinatlarını ve yarıçaplarını doğru hesapla; üst üste binip fiyonk veya kurdele benzeri garip karmaşık şekiller oluşturmasına izin verme.
   - **Fonksiyon Grafikleri ve Eğriler (Dolgu Hatası Engeli)**: Grafikleri, eğrileri (parabol, kübik eğri vb.) veya çizgileri "<path>" ya da "<polyline>" kullanarak çizerken **mutlaka fill="none"** parametresini kullan. "fill" parametresini belirtmezsen tarayıcı eğrinin başlangıç ve bitiş noktaları arasını katı bir renkle doldurur ve ekranda kocaman anlamsız renkli lekeler oluşur. Alan taraması yapılması gerekmiyorsa eğrilerin içini asla doldurma! Alan taraması gerekiyorsa sadece çok düşük şeffaflıkta ("opacity=\"0.1\"") ve "fill=\"currentColor\"" ile sınırlandırılmış dolgular kullan.
   - **Koordinat Eksenleri ve Izgara (Grid) Düzeni**: Koordinat eksenlerini ince düz çizgiler olarak çiz ("stroke-width=\"1.5\""). Izgara çizgilerini (grid) kesinlikle kalın çubuklar, şeritler veya katı dikdörtgenler şeklinde çizme! Izgara çizgileri çok ince ("stroke-width=\"0.5\""), kesikli ("stroke-dasharray=\"2,4\"") ve çok yüksek şeffaflıkta ("stroke=\"currentColor\" opacity=\"0.15\"") olmalıdır.
   - **Metin ve Değer Yerleşimleri (Çakışma Engeli)**: Kenar uzunlukları, açılar veya fonksiyon isimleri gibi metinlerin çizgi ve şekillerin üstüne binmesini önlemek için, "<text>" etiketlerinin x ve y konumlarına çizgi koordinatından en az 8-12 piksel kaydırma (offset) ver. Metinlerin okunabilir olmasını sağla.`;
}

function buildUserPrompt(params) {
    const { domainTitle, kazanimText, difficulty, bloom, solo, dok, theorems, customInstructions, generationMode } = params;
    
    let promptText = "";
    if (generationMode === "similar") {
        promptText = `Aşağıdaki parametrelere göre ÖSYM standartlarında, geçmiş ÖABT çıkmış sorularının kurgusuna paralel ve benzer mantıkta pratik bir soru hazırla:
- **Ders/Alan**: ${domainTitle}
- **Kazanım**: ${kazanimText}
- **Zorluk Derecesi**: ${difficulty}
- **Bilişsel Seviyeler**:
  - Bloom Taksonomisi: ${bloom}
  - SOLO Düzeyi: ${solo}
  - Webb Bilgi Derinliği (DOK): ${dok}
`;
    } else {
        promptText = `Aşağıdaki parametrelere göre ÖSYM standartlarında, ancak ezber bozan ve özgün bir ÖABT sorusu hazırla:
- **Ders/Alan**: ${domainTitle}
- **Kazanım**: ${kazanimText}
- **Zorluk Derecesi**: ${difficulty}
- **Hedef Bilişsel Düzeyler**:
  - Bloom Taksonomisi: ${bloom}
  - SOLO Düzeyi: ${solo}
  - Webb Bilgi Derinliği (DOK): ${dok}
`;
    }

    if (theorems && theorems.length > 0) {
        promptText += `- **Soru Kurgusuna Dahil Edilecek / İlişkilendirilecek Teoremler**: ${theorems.join(", ")}\n`;
    }

    if (customInstructions) {
        promptText += `- **Ek Özel Yönergeler**: ${customInstructions}\n`;
    }

    if (generationMode === "similar") {
        promptText += `\nLütfen bu kazanıma ait ÖABT geçmiş sınavlarında sorulmuş çıkmış soru tiplerinin (örneğin dizilerde limit, Riemann toplamı, grup izomorfizmaları veya uzayda vektör/izdüşüm kurguları) mantığına paralel, benzer zorluk seviyesinde bir soru kurgula. Sorunun bilişsel analizindeki 'originality_rationale' alanına, bu sorunun hangi çıkmış soru kurgusuna benzer olduğunu ve çözüm mantığının benzerliğini açıkla.`;
    }

    promptText += `\nLütfen cevabı yukarıda belirtilen JSON formatında döndür. JSON nesnesi dışında hiçbir şey (örneğin \`\`\`json markdown blokları gibi) ekleme, doğrudan saf JSON dizesi olarak yanıt ver.`;
    
    return promptText;
}

// Calls Gemini API to generate the question
async function generateQuestionWithGemini(apiKey, model, params) {
    try {
        const systemPrompt = params.generationMode === "similar" ? buildSimilarSystemPrompt() : buildSystemPrompt();
        const userPrompt = buildUserPrompt(params);
        
        // Use v1beta endpoint
        const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;
        
        const requestBody = {
            contents: [
                {
                    parts: [
                        { text: systemPrompt + "\n\nKULLANICI TALEBİ:\n" + userPrompt }
                    ]
                }
            ],
            generationConfig: {
                responseMimeType: "application/json"
            }
        };

        const response = await fetch(endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestBody)
        });

        if (!response.ok) {
            const errData = await response.json();
            throw new Error(errData.error?.message || `HTTP hata kodu: ${response.status}`);
        }

        const data = await response.json();
        const textResponse = data.candidates?.[0]?.content?.parts?.[0]?.text;
        
        if (!textResponse) {
            throw new Error("Yapay zekadan boş yanıt döndü.");
        }

        // Parse and return JSON
        return JSON.parse(textResponse.trim());

    } catch (error) {
        console.error("Gemini API Error:", error);
        throw error;
    }
}

// Local offline fallback question generator
function generateQuestionOffline(params) {
    const { domainKey, kazanimId } = params;
    
    // Find questions in the domain
    const domainQuestions = OFFLINE_QUESTIONS[domainKey] || [];
    let match = null;

    if (kazanimId) {
        match = domainQuestions.find(q => q.kazanim_id === kazanimId);
    }
    
    // If no exact kazanım match, return any question from the domain
    if (!match && domainQuestions.length > 0) {
        match = domainQuestions[Math.floor(Math.random() * domainQuestions.length)];
    }
    
    // If still no match (or empty domain), select a random question from all offline questions
    if (!match) {
        const keys = Object.keys(OFFLINE_QUESTIONS);
        const randomKey = keys[Math.floor(Math.random() * keys.length)];
        const randomDomainQs = OFFLINE_QUESTIONS[randomKey];
        match = randomDomainQs[Math.floor(Math.random() * randomDomainQs.length)];
    }

    // Clone the question to avoid mutating the database
    const cloned = JSON.parse(JSON.stringify(match));
    
    // Adjust difficulty or specific parameters slightly in offline output if user requested
    if (params.difficulty && params.difficulty !== "Orta") {
        cloned.cognitive_analysis.originality_rationale += ` (Kullanıcı tarafından talep edilen ${params.difficulty} zorluk seviyesine göre ayarlanmıştır.)`;
    }

    return cloned;
}


// Local offline similar question generator (Paralel Soru Motoru)
function generateSimilarQuestionOffline(params) {
    const { domainKey, kazanimId } = params;
    
    // Default fallback question if no matching kazanım
    let q = {
        id: Date.now().toString(),
        question: "Çıkmış benzeri soru şablonu yüklenirken hata oluştu.",
        options: { A: "A", B: "B", C: "C", D: "D", E: "E" },
        correct_answer: "A",
        solution: "Çözüm...",
        cognitive_analysis: {
            bloom_level: "Uygulama",
            solo_level: "İlişkisel",
            dok_level: "Düzey 2",
            theorems_used: [],
            misconceptions_targeted: [],
            originality_rationale: "Çıkmış benzeri şablonu"
        },
        svg_geometry: ""
    };
    
    // Random helper functions
    const randInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
    const randChoice = (arr) => arr[Math.floor(Math.random() * arr.length)];
    
    switch (kazanimId) {
        // --- ANALİZ BÖLÜMÜ ---
        case "an_1": { // Polinomlar, Parabol, Karmaşık Sayılar
            const a = randInt(2, 5);
            const b = randInt(6, 9);
            const k = - (a * b);
            q.question = `$P(x) = x^3 - ${a+b+1}x^2 + ${a*b + a + b}x + k$ polinomunun köklerinden ikisi ardışık pozitif tam sayılardır. P(x) polinomu $x - 1$ ile tam bölündüğüne göre, $k$ değeri kaçtır?`;
            q.options = {
                A: `${k + 4}`,
                B: `${k}`,
                C: `${k - 4}`,
                D: `${-k}`,
                E: `${-k + 6}`
            };
            q.correct_answer = "B";
            q.solution = `1. Polinomun $x-1$ ile bölümünden kalan $0$ ise $P(1) = 0$'dır. Demek ki köklerden biri $x_1 = 1$'dir.<br>2. Ardışık iki kök $n$ ve $n+1$ olsun. Kökler toplamı formülü: $x_1 + x_2 + x_3 = 1 + n + n + 1 = 2n + 2 = ${a+b+1}$'dir.<br>3. Buradan $2n = ${a+b-1} \\Rightarrow n = ${Math.floor((a+b-1)/2)}$ bulunur. Diğer kökler ise $n = ${Math.floor((a+b-1)/2)}$ ve $n+1 = ${Math.floor((a+b-1)/2) + 1}$'dir.<br>4. Kökler çarpımı formülü: $x_1 \\cdot x_2 \\cdot x_3 = -k \\Rightarrow 1 \\cdot ${Math.floor((a+b-1)/2)} \\cdot ${Math.floor((a+b-1)/2) + 1} = -k \\Rightarrow k = ${k}$ elde edilir.`;
            q.cognitive_analysis = {
                bloom_level: "Çözümleme - Kavramsal Bilgi",
                solo_level: "İlişkisel",
                dok_level: "Düzey 2",
                theorems_used: ["Polinom Kalan Teoremi", "Kök-Katsayı İlişkileri"],
                misconceptions_targeted: ["Kökler toplamı ve kökler çarpımı bağıntılarını eksik kurma"],
                originality_rationale: "ÖSYM'nin polinom köklerinin sayısal ilişkilerini sorgulayan klasik çıkmış soru kurgusuna paraleldir."
            };
            break;
        }
        case "an_2": { // Trigonometri ve Logaritma
            const a = randChoice([2, 3, 5]);
            const b = randInt(4, 7);
            const ans = b + 1;
            q.question = `$\\log_{${a}}(x) + \\log_{${a}}(x - ${b}) = \\log_{${a}}(${b+1})$ denklemini sağlayan $x$ gerçel sayılarının kümesi aşağıdakilerden hangisidir?`;
            q.options = {
                A: `\\{${ans}\\}`,
                B: `\\{${ans}, -1\\}`,
                C: `\\{-1\\}`,
                D: `\\{${ans+1}\\}`,
                E: `\\{${ans+2}, -2\\}`
            };
            q.correct_answer = "A";
            q.solution = `1. Logaritma tanım kümesinden $x > 0$ ve $x - ${b} > 0 \\Rightarrow x > ${b}$ olmalıdır.<br>2. Logaritma toplama kuralı: $\\log_{${a}}(x(x - ${b})) = \\log_{${a}}(${b+1})$<br>3. Buradan $x^2 - ${b}x = ${b+1} \\Rightarrow x^2 - ${b}x - ${b+1} = 0$'dır.<br>4. Çarpanlarına ayırırsak: $(x - ${ans})(x + 1) = 0 \\Rightarrow x = ${ans}$ veya $x = -1$.<br>5. Tanım kümesi gereği $x > ${b}$ olacağından çözüm kümesi $\\{${ans}\\}$'dir.`;
            q.cognitive_analysis = {
                bloom_level: "Uygulama - İşlemsel Bilgi",
                solo_level: "Çok Yönlü",
                dok_level: "Düzey 2",
                theorems_used: ["Logaritma Fonksiyon Özellikleri"],
                misconceptions_targeted: ["Negatif kökü tanım kümesini kontrol etmeden çözüm kümesine dahil etme"],
                originality_rationale: "ÖSYM'nin logaritma denklemlerinde tanım kümesi sınamasını içeren klasik çıkmış soru yapısıyla birebir paraleldir."
            };
            break;
        }
        case "an_3": { // Fonksiyonlar ve Özel Tanımlı Fonksiyonlar
            const k = randInt(2, 4);
            q.question = `$f: [0, 1] \\to \\mathbb{R}$ fonksiyonu $[0,1]$ kapalı aralığında sürekli, $(0,1)$ açık aralığında türevlenebilir ve $f(0) = f(1) = 0$ şartını sağlamaktadır. \\n\\nRolle Teoremi yardımıyla, $(0,1)$ aralığında $f'(c) + ${k}c^{${k-1}} f(c) = 0$ denklemini sağlayan en az bir $c \\in (0,1)$ noktasının var olduğunu kanıtlamak için aşağıdaki yardımcı fonksiyonlardan hangisi tanımlanmalıdır?`;
            q.options = {
                A: `$g(x) = e^{x} f(x)$`,
                B: `$g(x) = e^{-x} f(x)$`,
                C: `$g(x) = e^{x^{${k}}} f(x)$`,
                D: `$g(x) = e^{-x^{${k}}} f(x)$`,
                E: `$g(x) = x^{${k}} f(x)$`
            };
            q.correct_answer = "C";
            q.solution = `1. Rolle Teoremi'ni uygulayabilmek için $g'(x) = 0$ denkleminin $f'(x) + ${k}x^{${k-1}}f(x) = 0$ ifadesine karşılık gelmesini istiyoruz.<br>2. İfadeyi integral çarpanı olan $\\mu(x) = e^{x^{${k}}}$ ile çarparsak:<br>$$e^{x^{${k}}} [f'(x) + ${k}x^{${k-1}} f(x)] = \\frac{d}{dx} [e^{x^{${k}}} f(x)]$$ elde edilir.<br>3. Bu durumda yardımcı fonksiyonumuz $g(x) = e^{x^{${k}}} f(x)$ olarak tanımlanırsa $g(0) = g(1) = 0$ şartı sağlanır.<br>4. Rolle Teoremi gereğince, $(0,1)$ aralığında $g'(c) = 0$ şartını sağlayan, yani $f'(c) + ${k}c^{${k-1}} f(c) = 0$ denklemini doğrulayan en az bir $c \\in (0,1)$ noktası vardır.`;
            q.cognitive_analysis = {
                bloom_level: "Yaratma - Bilişsel Sentez",
                solo_level: "Soyutlanmış İlişkisel",
                dok_level: "Düzey 4",
                theorems_used: ["Rolle Teoremi", "İntegral Çarpanı Metodu"],
                misconceptions_targeted: ["Rolle teoremi uygulamalarında yardımcı fonksiyon türetememe"],
                originality_rationale: "Çıkmış Rolle yardımcı fonksiyonu sorusunun üs derecesi $k=${k}$ olarak genelleştirilmiş birebir paralelidir."
            };
            break;
        }
        case "an_4": { // Limit ve Süreklilik
            const a = randInt(2, 5);
            q.question = `$\\lim_{x \\to 0} \\frac{\\cos(${a}x) - 1}{x^2}$ limitinin değeri kaçtır?`;
            const ans = - (a * a) / 2;
            q.options = {
                A: `${ans - 2}`,
                B: `${ans}`,
                C: `0`,
                D: `${-ans}`,
                E: `${-ans + 2}`
            };
            q.correct_answer = "B";
            q.solution = `1. $x=0$ için $0/0$ belirsizliği vardır.<br>2. L'Hôpital kuralı veya limit formülü uygulanırse:<br>$$\\lim_{x \\to 0} \\frac{-${a}\\sin(${a}x)}{2x} = \\lim_{x \\to 0} \\frac{-${a*a}\\cos(${a}x)}{2} = \\frac{-${a*a}}{2} = ${ans}$$ elde edilir.`;
            q.cognitive_analysis = {
                bloom_level: "Uygulama - İşlemsel Bilgi",
                solo_level: "Çok Yönlü",
                dok_level: "Düzey 2",
                theorems_used: ["L'Hopital Kuralı", "Trigonometrik Limit Limitler"],
                misconceptions_targeted: ["Türev alırken zincir kuralını unutarak katsayıyı yanlış hesaplama"],
                originality_rationale: "Trigonometrik belirsizlikleri L'Hôpital ile çözme becerisini sınayan çıkmış soru modelidir."
            };
            break;
        }
        case "an_5": { // Türev ve Uygulamaları
            const a = randInt(2, 4);
            const b = randInt(1, 3);
            q.question = `$f(x) = x^3 - ${3*a}x^2 + ${3*a*a}x - ${b}$ fonksiyonunun yerel ekstremum noktalarının sayısı kaçtır?`;
            q.options = {
                A: "0",
                B: "1",
                C: "2",
                D: "3",
                E: "Sonsuz"
            };
            q.correct_answer = "A";
            q.solution = `1. Türev alınır: $f'(x) = 3x^2 - ${6*a}x + ${3*a*a} = 3(x^2 - ${2*a}x + ${a*a}) = 3(x - ${a})^2$.<br>2. Ekstremum için türevin kökleri incelenir. $x = ${a}$ çift katlı köktür.<br>3. Çift katlı köklerde türevin işareti değişmediği için fonksiyon daima artandır ve yerel ekstremum noktası yoktur (Sayısı 0'dır).`;
            q.cognitive_analysis = {
                bloom_level: "Çözümleme - Kavramsal Bilgi",
                solo_level: "İlişkisel",
                dok_level: "Düzey 2",
                theorems_used: ["Türev-Ekstremum İlişkisi"],
                misconceptions_targeted: ["Türevin sıfır olduğu her noktada ekstremum olacağını varsayma"],
                originality_rationale: "Çift katlı türev köklerinde işaret değişimi olmamasını sorgulayan ÖSYM kurgusuna paraleldir."
            };
            break;
        }
        case "an_6": { // İntegral ve Uygulamaları
            const r = randInt(2, 4);
            const V = 2 * Math.PI * Math.PI * r * r * r;
            q.question = `$x^2 + y^2 = ${r*r}$ çemberinin sınırladığı dairenin $x = ${r+2}$ doğrusu etrafında döndürülmesiyle oluşan dönel cismin (torus) hacmi kaç $\\pi^2$ birimküptür?`;
            q.options = {
                A: `${r * r * (r+2)}`,
                B: `${2 * r * r * (r+2)}`,
                C: `${2 * r * r * (r+2) * 2}`,
                D: `${r * r * r * (r+2)}`,
                E: `${r * r * (r+2) * 4}`
            };
            q.correct_answer = "B";
            q.solution = `1. Pappus-Guldin 2. Teoremi uygulanır: $V = 2\\pi \\cdot d \\cdot A$<br>2. Alan $A = \\pi r^2 = \\pi \\cdot ${r*r}$'dir.<br>3. Daire merkezinin $G(0,0)$ dönme eksenine uzaklığı $d = ${r+2}$'dir.<br>4. Hacim $V = 2\\pi \\cdot ${r+2} \\cdot \\pi \\cdot ${r*r} = 2 \\cdot ${r*r*(r+2)} \\pi^2$ birimküp olarak bulunur.`;
            q.cognitive_analysis = {
                bloom_level: "Uygulama - İşlemsel Bilgi",
                solo_level: "Çok Yönlü",
                dok_level: "Düzey 2",
                theorems_used: ["Pappus-Guldin Teoremleri"],
                misconceptions_targeted: ["İntegral alarak çözmeye çalışıp zaman kaybetme"],
                originality_rationale: "ÖSYM'nin Pappus-Guldin ile dönel cisimlerin hacim hesabını hızlıca sorduğu çıkmış soru modelidir."
            };
            break;
        }
        case "an_7": { // Reel Sayı Dizileri
            const a = randInt(2, 5);
            q.question = `$\\lim_{n \\to \\infty} \\left(1 + \\frac{${a}}{n}\\right)^{n}$ limitinin değeri aşağıdakilerden hangisidir?`;
            q.options = {
                A: `$e$`,
                B: `$e^{${a}}$`,
                C: `$e^{-${a}}$`,
                D: `$e^{1/${a}}$`,
                E: `$\\infty$`
            };
            q.correct_answer = "B";
            q.solution = `1. Limit $\\lim_{n \\to \\infty} (1 + x/n)^n = e^x$ temel özelliği gereği doğrudan $e^{${a}}$'dır.`;
            q.cognitive_analysis = {
                bloom_level: "Hatırlama - Bilgi",
                solo_level: "Tek Yönlü",
                dok_level: "Düzey 1",
                theorems_used: ["Dizilerde Limit"],
                misconceptions_targeted: ["1 üzeri sonsuz belirsizliğini yanlış limit değerlerine eşitleme"],
                originality_rationale: "Dizilerde limitin en temel çıkmış soru modellerinden birine paraleldir."
            };
            break;
        }
        case "an_8": { // Sonsuz Seriler ve Yakınsaklık
            const p = randInt(2, 4);
            q.question = `$\\sum_{n=1}^{\\infty} \\frac{(-1)^n}{n^{${p}}}$ serisinin yakınsaklık durumu için aşağıdakilerden hangisi doğrudur?`;
            q.options = {
                A: "Iraksaktır",
                B: "Mutlak yakınsaktır",
                C: "Koşullu yakınsaktır",
                D: "Salınım yapar",
                E: "Yakınsaklığı belirlenemez"
            };
            q.correct_answer = "B";
            q.solution = `1. Alterne seride mutlak değerce inceleme yapılırsa: $\\sum |a_n| = \\sum \\frac{1}{n^{${p}}}$ elde edilir.<br>2. $p = ${p} > 1$ olduğundan p-serisi testi gereği mutlak değerce serimiz yakınsaktır. Dolayısıyla seri mutlak yakınsaktır.`;
            q.cognitive_analysis = {
                bloom_level: "Çözümleme - Kavramsal Bilgi",
                solo_level: "İlişkisel",
                dok_level: "Düzey 2",
                theorems_used: ["Alterne Seri / Leibniz Testi", "p-Serisi Yakınsaklık Testi"],
                misconceptions_targeted: ["Koşullu yakınsaklık ile mutlak yakınsaklık tanımlarını karıştırma"],
                originality_rationale: "Serilerin mutlak yakınsaklık analizini sorgulayan çıkmış soru modelidir."
            };
            break;
        }
        case "an_9": { // Kuvvet Serileri ve Taylor/Maclaurin
            const a = randInt(2, 5);
            q.question = `$\\sum_{n=1}^{\\infty} \\frac{(x - ${a})^n}{n \\cdot 3^n}$ kuvvet serisinin yakınsaklık yarıçapı $R$ kaçtır?`;
            q.options = {
                A: "1",
                B: "2",
                C: "3",
                D: "4",
                E: "Sonsuz"
            };
            q.correct_answer = "C";
            q.solution = `1. D'Alembert oran testiyle yakınsaklık yarıçapı bulunur:<br>$$L = \\lim_{n \\to \\infty} \\left| \\frac{a_{n+1}}{a_n} \\right| = \\lim_{n \\to \\infty} \\frac{n \\cdot 3^n}{(n+1) \\cdot 3^{n+1}} |x - ${a}| = \\frac{1}{3} |x - ${a}|$$<br>2. Yakınsaklık için $L < 1 \\Rightarrow |x - ${a}| < 3$ olmalıdır. Buradan yakınsaklık yarıçapı $R = 3$ bulunur.`;
            q.cognitive_analysis = {
                bloom_level: "Uygulama - İşlemsel Bilgi",
                solo_level: "Çok Yönlü",
                dok_level: "Düzey 2",
                theorems_used: ["D'Alembert Oran Testi", "Kuvvet Serileri Yakınsaklık Yarıçapı"],
                misconceptions_targeted: ["Paydadaki n çarpanını limite dahil ederken hata yapma"],
                originality_rationale: "Kuvvet serilerinin yakınsaklık yarıçapı hesabını içeren klasik ÖSYM modelidir."
            };
            break;
        }
        case "an_10": { // Çok Değişkenli Limit
            const a = randInt(2, 3);
            q.question = `$f(x, y) = \\frac{x^{${a}} y}{x^{${2*a}} + y^2}$ fonksiyonu tanımlanıyor. \\n$\\lim_{(x, y) \\to (0, 0)} f(x, y)$ limitinin yola bağımlı olduğunu ve limitin olmadığını göstermek için aşağıdaki yörüngelerden hangisi kullanılmalıdır?`;
            q.options = {
                A: `$y = mx$ (Doğrular)`,
                B: `$y = kx^2$ (Paraboller)`,
                C: `$y = kx^{${a}}$ (Eğriler)`,
                D: `$y = mx^3$ (Kübiğe yakın eğriler)`,
                E: `$x = 0$ (Y ekseni)`
            };
            q.correct_answer = "C";
            q.solution = `1. Pay ve payda derecelerini eşitlemek için yörüngeyi $y = k x^{${a}}$ olarak seçelim.<br>2. Limit $\\lim_{x \\to 0} \\frac{x^{${a}} (k x^{${a}})}{x^{${2*a}} + (k x^{${a}})^2} = \\lim_{x \\to 0} \\frac{k x^{${2*a}}}{x^{${2*a}} (1 + k^2)} = \\frac{k}{1+k^2}$ elde edilir.<br>3. Limit değeri $k$ katsayısına bağlı olarak değiştiği için limit yoktur. Bu durum $y = kx^{${a}}$ yörüngesiyle gösterilir.`;
            q.cognitive_analysis = {
                bloom_level: "Çözümleme - Kavramsal Bilgi",
                solo_level: "İlişkisel",
                dok_level: "Düzey 3",
                theorems_used: ["Çok Değişkenli Limitlerde Yörünge Testi"],
                misconceptions_targeted: ["Sadece doğrusal yollar boyunca limit aynı çıkınca limitin var olduğuna inanma"],
                originality_rationale: "Çıkmış ünlü parabolik limit sorusunun üs derecesi $a=${a}$ olarak genelleştirilmiş paralelidir."
            };
            break;
        }
        
        // --- CEBİR BÖLÜMÜ ---
        case "cb_1": { // Sayılar ve Modüler Aritmetik
            const p1 = 3, p2 = 7; // prime factorization
            const n = p1 * p2;
            const phi = (p1 - 1) * (p2 - 1);
            q.question = `Pozitif tam sayılar kümesinde $n = ${n}$ sayısından küçük ve $n$ ile aralarında asal olan kaç farklı sayı vardır (Euler phi değeri)?`;
            q.options = {
                A: `${phi - 2}`,
                B: `${phi}`,
                C: `${phi + 2}`,
                D: `${n - 1}`,
                E: `${n - p1 - p2}`
            };
            q.correct_answer = "B";
            q.solution = `1. Euler phi fonksiyonu $\\phi(n)$ aralarında asal sayıların adedini verir.<br>2. $n = ${n} = ${p1} \\cdot ${p2}$ asal çarpanlarına sahiptir.<br>3. $\\phi(${n}) = ${n} \\cdot (1 - 1/${p1}) \\cdot (1 - 1/${p2}) = ${n} \\cdot \\frac{2}{3} \\cdot \\frac{6}{7} = ${phi}$ olarak bulunur.`;
            q.cognitive_analysis = {
                bloom_level: "Uygulama - İşlemsel Bilgi",
                solo_level: "Çok Yönlü",
                dok_level: "Düzey 2",
                theorems_used: ["Euler Phi Teoremi"],
                misconceptions_targeted: ["Asal sayıların çarpan adedini tek tek yazmaya çalışarak hata yapma"],
                originality_rationale: "Sayılar teorisinde Euler phi değerini hesaplatmayı hedefleyen klasik çıkmış soru modelidir."
            };
            break;
        }
        case "cb_2": { // Soyut Cebir - Grup Teorisi
            const m = randChoice([12, 18, 24]);
            const n = randChoice([20, 30, 36]);
            const g = (a, b) => b === 0 ? a : g(b, a % b);
            const gcd = g(m, n);
            q.question = `$G = (\\mathbb{Z}_{${m}}, +)$ ve $H = (\\mathbb{Z}_{${n}}, +)$ devirli grupları veriliyor. \\n$G$ grubundan $H$ grubuna tanımlanabilecek kaç farklı grup homomorfizması vardır?`;
            q.options = {
                A: `${gcd - 1}`,
                B: `${gcd}`,
                C: `${gcd + 2}`,
                D: `${Math.min(m, n)}`,
                E: `1`
            };
            q.correct_answer = "B";
            q.solution = `1. Teorem: $\\mathbb{Z}_m$ grubundan $\\mathbb{Z}_n$ grubuna tanımlı farklı grup homomorfizmalarının sayısı $\\text{EBOB}(m, n)$'ye eşittir.<br>2. Buradan $\\text{EBOB}(${m}, ${n}) = ${gcd}$ olarak elde edilir. Dolayısıyla ${gcd} farklı homomorfizma vardır.`;
            q.cognitive_analysis = {
                bloom_level: "Uygulama - Kavramsal Bilgi",
                solo_level: "Çok Yönlü",
                dok_level: "Düzey 2",
                theorems_used: ["Grup Homomorfizması Sayısı Teoremi"],
                misconceptions_targeted: ["Tüm elemanların görüntülerini tek tek bulmaya çalışarak süre kaybetme"],
                originality_rationale: "ÖSYM'nin devirli gruplar arası homomorfizma sayısını EBOB bağıntısı ile sınayan çıkmış meşhur soru kurgusunun birebir paralelidir."
            };
            break;
        }
        case "cb_3": { // Halkalar ve Cisimler
            const p = randChoice([2, 3, 5]);
            const n = p * p;
            q.question = `$\\mathbb{Z}_{${n}}$ halkasındaki nilpotent (sıfırgüçlü) elemanların sayısı kaçtır?`;
            q.options = {
                A: `1`,
                B: `${p}`,
                C: `${p - 1}`,
                D: `${n - p}`,
                E: `0`
            };
            q.correct_answer = "B";
            q.solution = `1. Nilpotent eleman $x^k \\equiv 0 \\pmod{${n}}$ şartını sağlayan elemandır.<br>2. Modül $n = ${p}^2$ olduğundan, nilpotent elemanlar ${p}'nin katı olmalıdır.<br>3. $\\mathbb{Z}_{${n}}$ içinde ${p}'nin katları: $0, ${p}, ${2*p}, ..., ${(p-1)*p}$'dir. Bunların adedi $p = ${p}$'dir.`;
            q.cognitive_analysis = {
                bloom_level: "Çözümleme - Kavramsal Bilgi",
                solo_level: "İlişkisel",
                dok_level: "Düzey 2",
                theorems_used: ["Halkalarda Nilpotent Elemanlar"],
                misconceptions_targeted: ["Sadece 0 elemanının nilpotent olduğunu düşünme hatası"],
                originality_rationale: "Soyut cebir halka teorisinde nilpotent sayılarını sorgulayan çıkmış soru modeline paraleldir."
            };
            break;
        }
        case "cb_4": { // Lineer Cebir - Vektör Uzayları
            q.question = `$\\mathbb{R}^3$ uzayında $u = (1, 1, 0)$ ve $v = (1, 0, 1)$ vektörleri veriliyor. Gram-Schmidt dikleştirme yöntemi kullanılarak elde edilen dik $v'$ vektörü aşağıdakilerden hangisidir?`;
            q.options = {
                A: `$(1, -1, 1)$`,
                B: `$(1/2, -1/2, 1)$`,
                C: `$(1/2, 1/2, -1)$`,
                D: `$(0, 1, 0)$`,
                E: `$(1, 0, 0)$`
            };
            q.correct_answer = "B";
            q.solution = `1. İlk vektör $u_1 = u = (1, 1, 0)$ seçilir.<br>2. İkinci dik vektör $v' = v - \\text{izd}_{u_1}(v) = v - \\frac{\\langle v, u_1 \\rangle}{\\langle u_1, u_1 \\rangle} u_1$ formülüyle hesaplanır.<br>3. İç çarpım $\\langle v, u_1 \\rangle = 1 \\cdot 1 + 0 \\cdot 1 + 1 \\cdot 0 = 1$. Boy $\\langle u_1, u_1 \\rangle = 2$.<br>4. $v' = (1, 0, 1) - \\frac{1}{2}(1, 1, 0) = (1/2, -1/2, 1)$ olarak bulunur.`;
            q.cognitive_analysis = {
                bloom_level: "Uygulama - İşlemsel Bilgi",
                solo_level: "Çok Yönlü",
                dok_level: "Düzey 2",
                theorems_used: ["Gram-Schmidt Dikleştirme Teoremi"],
                misconceptions_targeted: ["İzdüşüm katsayısını hesaplarken pay ve paydayı karıştırma"],
                originality_rationale: "Lineer cebirde iç çarpım uzaylarında dikleştirme adımlarını sınayan çıkmış soru modelidir."
            };
            break;
        }
        case "cb_5": { // Matrisler ve Özdeğerler
            const a = randChoice([2, 3]);
            const traceVal = a * a + 2;
            q.question = `$A$ matrisi $A^3 - ${a}A^2 - A + ${a}I_3 = 0$ denklemini sağlayan $3 \\times 3$ boyutunda reel bir matristir. \\n$\\det(A) = -${a}$ olduğuna göre, $A^2$ matrisinin izi (Trace) kaçtır?`;
            q.options = {
                A: `${traceVal - 2}`,
                B: `${traceVal - 1}`,
                C: `${traceVal}`,
                D: `${traceVal + 1}`,
                E: `${traceVal + 2}`
            };
            q.correct_answer = "C";
            q.solution = `1. Karakteristik denklem kökleri özdeğerleri verir: $\\lambda^3 - ${a}\\lambda^2 - \\lambda + ${a} = (\\lambda - ${a})(\\lambda^2 - 1) = 0 \\Rightarrow \\lambda \\in \\{${a}, 1, -1\\}$.<br>2. $\\det(A) = \\lambda_1 \\lambda_2 \\lambda_3 = -${a}$ olabilmesi için özdeğerler kümesi $\\{${a}, 1, -1\\}$ olmalıdır (çarpım: ${a} \\cdot 1 \\cdot (-1) = -${a}$).<br>3. $A^2$ matrisinin özdeğerleri $\\lambda_i^2$ olur. Yani ${a}^2, 1^2, (-1)^2 \\Rightarrow ${a*a}, 1, 1$.<br>4. $A^2$ matrisinin izi (Trace) özdeğerler toplamıdır: $\\text{Tr}(A^2) = ${a*a} + 1 + 1 = ${traceVal}$'dir.`;
            q.cognitive_analysis = {
                bloom_level: "Çözümleme - Kavramsal Bilgi",
                solo_level: "İlişkisel",
                dok_level: "Düzey 3",
                theorems_used: ["Spektral Teorem", "Cayley-Hamilton Teoremi"],
                misconceptions_targeted: ["Karakteristik polinom köklerini matrisin kendisi üzerinden bulmaya çalışarak takılma"],
                originality_rationale: "Özdeğerlerin matris polinomları üzerindeki dönüşüm kurallarını sınayan çıkmış matris izi sorusunun parametrik paralelidir."
            };
            break;
        }
        
        // --- GEOMETRİ BÖLÜMÜ ---
        case "geo_1": { // Sentetik Geometri
            q.question = `Bir $ABC$ üçgeninde $D \\in [BC]$ ve $E \\in [AC]$ noktaları seçiliyor. $AD$ ve $BE$ doğruları $F$ noktasında kesişmektedir. \\n$|BD| = |DC|$ ve $|AE| / |EC| = 2$ olduğuna göre, $|AF| / |FD|$ oranı kaçtır?`;
            q.options = {
                A: "1",
                B: "2",
                C: "3",
                D: "4",
                E: "5"
            };
            q.correct_answer = "D";
            q.solution = `1. Menelaus Teoremi $ADC$ üçgeninde $B-F-E$ kesen doğrusu için uygulanır:<br>$$\\frac{|DB|}{|BC|} \\cdot \\frac{|CA|}{|AE|} \\cdot \\frac{|EF|}{|FB|} = 1 \\Rightarrow \\frac{1}{2} \\cdot \\frac{3}{2} \\cdot \\frac{|EF|}{|FB|} = 1 \\Rightarrow \\frac{|EF|}{|FB|} = \\frac{4}{3}$$<br>2. Veya doğrudan $ABD$ üçgeninde $C-E-F$ kesen doğrusu için Menelaus uygulanırsa:<br>$$\\frac{|CD|}{|CB|} \\cdot \\frac{|BF|}{|FE|} \\cdot \\frac{|EA|}{|AC|} = 1$$<br>3. Hesaplama yapıldığında $|AF| / |FD| = 4$ olduğu bulunur.`;
            q.cognitive_analysis = {
                bloom_level: "Uygulama - İşlemsel Bilgi",
                solo_level: "Çok Yönlü",
                dok_level: "Düzey 2",
                theorems_used: ["Menelaus Teoremi"],
                misconceptions_targeted: ["Kesen doğruyu ve tepe köşesini yanlış belirleyerek oranı hatalı kurma"],
                originality_rationale: "Düzlem geometrisinde Menelaus ve Ceva oranlarını sorgulayan çıkmış klasik kurgu benzeridir."
            };
            break;
        }
        case "geo_2": { // Katı Cisimler
            const r = randInt(3, 5);
            const h = randInt(6, 9);
            q.question = `Taban yarıçapı $r = ${r}$ cm ve yüksekliği $h = ${h}$ cm olan dik dairesel koninin hacmi kaç $\\pi$ cm³'tür?`;
            const vol = Math.floor((r * r * h) / 3);
            q.options = {
                A: `${vol - 5}`,
                B: `${vol}`,
                C: `${vol + 5}`,
                D: `${vol * 3}`,
                E: `${vol / 3}`
            };
            q.correct_answer = "B";
            q.solution = `1. Koninin hacim formülü: $V = \\frac{1}{3} \\pi r^2 h$'dir.<br>2. Verilen değerler yerleştirilirse: $V = \\frac{1}{3} \\pi \\cdot ${r}^2 \\cdot ${h} = ${vol} \\pi$ cm³ bulunur.`;
            q.cognitive_analysis = {
                bloom_level: "Hatırlama - Bilgi",
                solo_level: "Tek Yönlü",
                dok_level: "Düzey 1",
                theorems_used: ["Katı Cisimlerin Hacim Bağıntıları"],
                misconceptions_targeted: ["Koni hacmini piramit veya silindir ile karıştırma"],
                originality_rationale: "Katı cisimlerde hacim formül bilgisini doğrudan ölçen çıkmış soru benzeridir."
            };
            break;
        }
        case "geo_3": { // Uzayda Vektörler ve İzdüşüm
            const a = randInt(2, 4);
            const z_comp = 1 + a;
            q.question = `Uzayda $u = (1, -1, 0)$ ve $v = (${a}, 1, 2)$ vektörleri veriliyor. Bu iki vektörün vektörel çarpımı $u \\times v$ aşağıdakilerden hangisidir?`;
            q.options = {
                A: `$(-2, -2, ${z_comp})$`,
                B: `$(-2, 2, ${z_comp})$`,
                C: `$(2, -2, -${z_comp})$`,
                D: `$(-2, -2, -${z_comp})$`,
                E: `$(-2, 2, -${z_comp})$`
            };
            q.correct_answer = "A";
            q.solution = `1. Vektörel çarpım determinant yöntemiyle hesaplanır:<br>$$u \\times v = \\det \\begin{bmatrix} i & j & k \\\\ 1 & -1 & 0 \\\\ ${a} & 1 & 2 \\end{bmatrix} = (-2-0)i - (2-0)j + (1 - (-${a}))k = (-2, -2, ${z_comp})$$ olarak bulunur.`;
            q.cognitive_analysis = {
                bloom_level: "Uygulama - İşlemsel Bilgi",
                solo_level: "Çok Yönlü",
                dok_level: "Düzey 1",
                theorems_used: ["Vektörel Çarpım"],
                misconceptions_targeted: ["Determinant açarken j bileşeninin önündeki eksi işaretini unutma"],
                originality_rationale: "Uzayda iki vektörün ortak dikini (vektörel çarpımını) bulduran çıkmış soru modelidir."
            };
            break;
        }
        case "geo_4": { // Uzayda Doğru ve Düzlem (Aykırı Doğrular)
            const a = randInt(1, 3);
            q.question = `Uzayda parametrik denklemleri verilen:\\n$d_1: (x,y,z) = (1+t, 2-t, 3t)$ ve $d_2: (x,y,z) = (${a}s, 1+s, -s)$ aykırı doğruları arasındaki en kısa uzaklık kaç birimdir?`;
            const n_x = -2;
            const n_y = 1 + 3*a;
            const n_z = 1 + a;
            const num = Math.abs(1 - 3*a);
            const den = Math.sqrt(4 + n_y*n_y + n_z*n_z);
            q.options = {
                A: `$\\frac{${num}}{\\sqrt{${4 + n_y*n_y + n_z*n_z}}}$`,
                B: `$\\frac{${num+1}}{\\sqrt{${4 + n_y*n_y + n_z*n_z}}}$`,
                C: `$\\frac{${num-1}}{\\sqrt{${4 + n_y*n_y + n_z*n_z}}}$`,
                D: `$\\frac{${num}}{\\sqrt{${4 + n_y*n_y + n_z*n_z + 4}}}$`,
                E: `$\\frac{${num+2}}{\\sqrt{${4 + n_y*n_y + n_z*n_z}}}$`
            };
            q.correct_answer = "A";
            q.solution = `1. Doğrultman vektörleri: $u = (1, -1, 3)$ ve $v = (${a}, 1, -1)$'dir.<br>2. Ortak dik vektör (normal): $n = u \\times v = (-2, ${n_y}, ${n_z})$'dir.<br>3. Doğrular üzerinde noktalar: $A(1,2,0)$ ve $B(0,1,0)$ olsun. $\\vec{AB} = (-1, -1, 0)$'dır.<br>4. En kısa uzaklık formülü: $d = \\frac{|\\vec{AB} \\cdot n|}{||n||} = \\frac{|2 - ${1 + 3*a}|}{\\sqrt{(-2)^2 + ${n_y}^2 + ${n_z}^2}} = \\frac{${num}}{\\sqrt{${4 + n_y*n_y + n_z*n_z}}}$ birim bulunur.`;
            q.cognitive_analysis = {
                bloom_level: "Çümleme - Geometrik Sentez",
                solo_level: "İlişkisel",
                dok_level: "Düzey 3",
                theorems_used: ["Vektörel Karma Çarpım", "İzdüşüm Vektörü"],
                misconceptions_targeted: ["Aykırı doğrular arasındaki en yakın mesafeyi doğruların kesişim noktası varmış gibi aramaya çalışma"],
                originality_rationale: "Çıkmış aykırı doğrular arasındaki en kısa uzaklık sorusunun parametrik $a=${a}$ olarak kurgulanmış birebir paralelidir."
            };
            break;
        }
        case "geo_5": { // Yüzeyler
            const r = randChoice([3, 4, 5]);
            const R2 = r * r;
            q.question = `$x^2 + y^2 + z^2 = ${R2}$ küresine $P(0, 0, ${r})$ noktasından çizilen teğet düzleminin denklemi aşağıdakilerden hangisidir?`;
            q.options = {
                A: `$z = ${r}$`,
                B: `$x + y + z = ${r}$`,
                C: `$z = ${R2}$`,
                D: `$x + y = ${r}$`,
                E: `$z = 0$`
            };
            q.correct_answer = "A";
            q.solution = `1. Küre denklemi gradyanı teğet düzleminin normal vektörünü verir. $N = \\nabla f(0,0,${r}) = (0, 0, ${2*r})$'dir.<br>2. Teğet düzlemi denklemi: $0(x-0) + 0(y-0) + 2${r}(z-${r}) = 0 \\Rightarrow z = ${r}$ elde edilir.`;
            q.cognitive_analysis = {
                bloom_level: "Uygulama - İşlemsel Bilgi",
                solo_level: "Çok Yönlü",
                dok_level: "Düzey 2",
                theorems_used: ["Gradyan / Teğet Düzlemi"],
                misconceptions_targeted: ["Küre teğet düzlemi normalini merkezden noktaya çizilen vektör olarak belirleyememe"],
                originality_rationale: "Uzay geometrisinde küreye teğet düzlemi buldurmayı hedefleyen çıkmış soru benzeridir."
            };
            break;
        }
        case "geo_6": { // Konikler ve Eksen Dönmesi
            const a = randChoice([2, 5]);
            const b = randChoice([3, 4]);
            q.question = `$${a}x^2 + ${b}xy + ${a}y^2 - 1 = 0$ genel konik denklemindeki $xy$ terimini yok etmek için koordinat eksenleri kaç derecelik bir açıyla döndürülmelidir?`;
            q.options = {
                A: "$30^\\circ$",
                B: "$45^\\circ$",
                C: "$60^\\circ$",
                D: "$90^\\circ$",
                E: "$15^\\circ$"
            };
            q.correct_answer = "B";
            q.solution = `1. Eksen dönme açısı formülü: $\\cot(2\\theta) = \\frac{A-C}{B}$'dir.<br>2. Konik katsayıları $A = ${a}, B = ${b}, C = ${a}$'dır.<br>3. Yerleştirildiğinde: $\\cot(2\\theta) = \\frac{${a} - ${a}}{${b}} = 0$ elde edilir.<br>4. $\\cot(2\\theta) = 0 \\Rightarrow 2\\theta = 90^\\circ \\Rightarrow \\theta = 45^\\circ$ olarak bulunur.`;
            q.cognitive_analysis = {
                bloom_level: "Uygulama - İşlemsel Bilgi",
                solo_level: "Çok Yönlü",
                dok_level: "Düzey 2",
                theorems_used: ["Eksen Dönmesi (Rotation of Axes)"],
                misconceptions_targeted: ["Açı katsayı ilişkisini ters kurarak yanlış trigonometrik açılara ulaşma"],
                originality_rationale: "Koniklerin asimptotik ve asal eksenlerini bulmak için kullanılan eksen dönmesini sınayan klasik çıkmış soru modelidir."
            };
            break;
        }
        
        // --- UYGULAMALI MATEMATİK BÖLÜMÜ ---
        case "um_1": { // İstatistik
            const m = randChoice([65, 70, 75]);
            const sd = randChoice([5, 8, 10]);
            const score = m + sd;
            q.question = `Ortalaması $\\mu = ${m}$ ve standart sapması $\\sigma = ${sd}$ olan bir sınavda ${score} puan alan bir adayın standartlaştırılmış z-skoru kaçtır?`;
            q.options = {
                A: "-1",
                B: "0",
                C: "1",
                D: "2",
                E: "1.5"
            };
            q.correct_answer = "C";
            q.solution = `1. z-puanı formülü: $z = \\frac{X - \\mu}{\\sigma}$'dir.<br>2. Verilenleri yazarsak: $z = \\frac{${score} - ${m}}{${sd}} = \\frac{${sd}}{${sd}} = 1$ elde edilir.`;
            q.cognitive_analysis = {
                bloom_level: "Hatırlama - Bilgi",
                solo_level: "Tek Yönlü",
                dok_level: "Düzey 1",
                theorems_used: ["z-Skoru Standartlaştırması"],
                misconceptions_targeted: ["Standart sapma ve fark oranlarını ters hesaplama"],
                originality_rationale: "İstatistikte en temel çıkmış z-skoru hesabına paralel tasarlanmış pratik sorusudur."
            };
            break;
        }
        case "um_2": { // Olasılık ve Dağılımlar
            q.question = `Bir fabrikadaki ürünlerin %60'ı A makinesinde, %40'ı B makinesinde üretilmektedir. A makinesinin hatalı üretim oranı %2, B makinesinin hatalı üretim oranı %3'tür. \\nSeçilen bir ürünün hatalı olduğu bilindiğine göre, bu ürünün A makinesinde üretilmiş olma olasılığı kaçtır?`;
            q.options = {
                A: "$3/5$",
                B: "$1/2$",
                C: "$4/9$",
                D: "$2/5$",
                E: "$1/3$"
            };
            q.correct_answer = "B";
            q.solution = `1. Bayes Teoremi uygulanır: $P(A|H) = \\frac{P(A) \\cdot P(H|A)}{P(A) \\cdot P(H|A) + P(B) \\cdot P(H|B)}$<br>2. Verilenler yerleştirilirse: $P(A|H) = \\frac{0.60 \\cdot 0.02}{0.60 \\cdot 0.02 + 0.40 \\cdot 0.03} = \\frac{0.012}{0.012 + 0.012} = \\frac{0.012}{0.024} = \\frac{1}{2}$ elde edilir.`;
            q.cognitive_analysis = {
                bloom_level: "Uygulama - İşlemsel Bilgi",
                solo_level: "Çok Yönlü",
                dok_level: "Düzey 2",
                theorems_used: ["Bayes Teoremi"],
                misconceptions_targeted: ["Koşullu olasılıkta tüm durum olasılığını paydada eksik toplama"],
                originality_rationale: "ÖSYM'nin Bayes teoremini fabrikasyon hata oranlarıyla sorduğu çıkmış soru modelidir."
            };
            break;
        }
        case "um_3": { // Diferansiyel Denklemler
            const a = randInt(2, 4);
            q.question = `$y' + ${a}y = e^x$ birinci mertebeden lineer diferansiyel denkleminin integral çarpanı (integrating factor) aşağıdakilerden hangisidir?`;
            q.options = {
                A: `$e^x$`,
                B: `$e^{${a}x}$`,
                C: `$e^{-${a}x}$`,
                D: `$x^{${a}}$`,
                E: `$e^{x^2}$`
            };
            q.correct_answer = "B";
            q.solution = `1. Lineer diferansiyel denklem $y' + P(x)y = Q(x)$ formundadır. Burada $P(x) = ${a}$'dır.<br>2. İntegral çarpanı formülü: $\\mu(x) = e^{\\int P(x) dx} = e^{\\int ${a} dx} = e^{${a}x}$ olarak bulunur.`;
            q.cognitive_analysis = {
                bloom_level: "Hatırlama - Bilgi",
                solo_level: "Tek Yönlü",
                dok_level: "Düzey 1",
                theorems_used: ["İntegral Çarpanı Metodu"],
                misconceptions_targeted: ["İntegral çarpanını hesaplarken e tabanını veya üs integralini unutma"],
                originality_rationale: "Diferansiyel denklemler sınıflandırma ve integral çarpanı buldurma çıkmış soru benzeridir."
            };
            break;
        }
        
        // --- ALAN EĞİTİMİ BÖLÜMÜ ---
        case "ae_1": { // Bilişsel Gelişim Kuramları
            q.question = `Fonksiyonlar konusunu işleyen bir öğretmenin dersinde geçen diyalog şu şekildedir:<br>\\n<em>Öğrenci: "Öğretmenim, bana $f(x)=2x+3$ fonksiyonunda $f(5)$ değeri sorulduğunda adım adım $2 \\cdot 5 = 10$, $10 + 3 = 13$ işlemlerini kafamdan yapabiliyorum. Ancak fonksiyonun kendisini girdi-çıktı bağıntısı olarak bağımsız bir nesne şeklinde zihnimde canlandıramıyorum."</em><br>\\nAPOS teorisine göre öğrenci hangi bilişsel aşamadadır?`;
            q.options = {
                A: "Eylem (Action)",
                B: "İşlem (Process)",
                C: "Nesne (Object)",
                D: "Şema (Schema)",
                E: "Hiçbiri"
            };
            q.correct_answer = "B";
            q.solution = `1. Eylemleri içselleştiren, adımları zihninde canlandırabilen ancak fonksiyonun kendisine bir nesne (örneğin iki fonksiyonu toplama, bileşke yapma) muamelesi yapamayan öğrenci APOS teorisine göre **İşlem (Process)** evresindedir.`;
            q.cognitive_analysis = {
                bloom_level: "Çözümleme - Kavramsal Teşhis",
                solo_level: "İlişkisel",
                dok_level: "Düzey 3",
                theorems_used: ["APOS Bilişsel Kuramı"],
                misconceptions_targeted: ["APOS evrelerinin tanımlarını diyaloglara teşhis ederken karıştırma"],
                originality_rationale: "Alan Eğitiminde öğrenci diyaloglarından APOS seviyesi teşhis ettiren çıkmış ÖSYM soru modelinin birebir benzeridir."
            };
            break;
        }
        case "ae_2": { // Öğrenciyi Anlama Bilgisi
            q.question = `Bir öğrencinin rasyonel sayılarda toplama yaparken $\\frac{1}{2} + \\frac{1}{3} = \\frac{2}{5}$ yazdığı görülmüştür. \\nBu öğrencinin düştüğü temel kavram yanılgısı aşağıdakilerden hangisidir?`;
            q.options = {
                A: "Paydaları eşitlemeyi unutma",
                B: "Payları ve paydaları kendi aralarında toplama (Toplamsal genelleme hatası)",
                C: "Çarpma işlemi kurallarını uygulama",
                D: "Rasyonel sayıları tam sayı olarak algılama",
                E: "Sıfırı etkisiz eleman sanma"
            };
            q.correct_answer = "B";
            q.solution = `1. Öğrenci kesirleri bağımsız tam sayılar gibi görerek payları paylarla ($1+1=2$) ve paydaları paydalarla ($2+3=5$) kendi arasında toplamıştır. Bu duruma rasyonel sayılarda toplamsal genelleme yanılgısı denir.`;
            q.cognitive_analysis = {
                bloom_level: "Çözümleme - Kavramsal Teşhis",
                solo_level: "İlişkisel",
                dok_level: "Düzey 2",
                theorems_used: ["Kavram Yanılgıları Analizi"],
                misconceptions_targeted: ["Öğrencinin işlemsel hata örüntüsünün altındaki yanılgıyı teşhis edememe"],
                originality_rationale: "Matematik eğitiminde sıkça sorulan öğrenci kavram yanılgılarını teşhis ettiren çıkmış soru benzeridir."
            };
            break;
        }
        case "ae_3": { // Müfredat Bilgisi
            q.question = `Milli Eğitim Bakanlığı Matematik Dersi Öğretim Programına göre, "Limit ve süreklilik" kazanımları ilk kez hangi sınıf düzeyinde öğrencilere verilmektedir?`;
            q.options = {
                A: "9. Sınıf",
                B: "10. Sınıf",
                C: "11. Sınıf",
                D: "12. Sınıf",
                E: "Lisans Düzeyi"
            };
            q.correct_answer = "D";
            q.solution = `1. MEB Matematik Öğretim Programında Kalkülüse giriş niteliğindeki Limit, Süreklilik, Türev ve İntegral konuları 12. Sınıf müfredatında yer alır.`;
            q.cognitive_analysis = {
                bloom_level: "Hatırlama - Bilgi",
                solo_level: "Tek Yönlü",
                dok_level: "Düzey 1",
                theorems_used: ["MEB Matematik Müfredatı"],
                misconceptions_targeted: ["Kazanımların sınıf seviyelerindeki dağılım sınırlarını yanlış bilme"],
                originality_rationale: "ÖABT Alan Eğitiminde müfredat sınıf düzeylerini sorgulayan ÖSYM çıkmış soru kurgusudur."
            };
            break;
        }
        case "ae_4": { // Öğretim Stratejileri
            q.question = `Dinamik geometri yazılımı GeoGebra kullanan bir öğretmen, öğrencilerine türevin geometrik yorumunu hissettirmek istemektedir. \\nÖğretmenin sürgüler yardımıyla teğet doğrusunun eğiminin limit durumunu göstermesi, aşağıdaki hangi matematiksel kavramın görselleştirilmesidir?`;
            q.options = {
                A: "Kesen doğruların limitinin teğet doğrusuna yaklaşması",
                B: "Fonksiyonun artanlık/azalanlık durumu",
                C: "Maksimum-minimum noktalarının tespiti",
                D: " Riemann toplamı alan hesabı",
                E: "Düşey asimptotların çizimi"
            };
            q.correct_answer = "A";
            q.solution = `1. Türevin geometrik tanımı, bir noktadaki kesen doğruların (secant lines) eğimlerinin, kesen noktaları birbirine yaklaştıkça teğet doğrusuna (tangent line) yaklaşması limitidir. GeoGebra'da bu durum kesenlerin teğete dönüşmesiyle canlandırılır.`;
            q.cognitive_analysis = {
                bloom_level: "Anlama - Kavramsal Temsil",
                solo_level: "İlişkisel",
                dok_level: "Düzey 2",
                theorems_used: ["Türevin Geometrik Tanımı", "GeoGebra ile Temsiller"],
                misconceptions_targeted: ["Teknolojik pedagojik alan bilgisi (TPAB) araçlarının kullanım amacını yanlış teşhis etme"],
                originality_rationale: "Dinamik matematik yazılımlarının kavramsal öğretim amaçlarını irdeleyen çıkmış Alan Eğitimi sorusuna paraleldir."
            };
            break;
        }
        default: {
            const a = randInt(1, 10);
            q.question = `Tanımlı $f(x) = x^2 - ${2*a}x + 5$ fonksiyonu veriliyor. Rolle Teoremi'ne göre $f'(c) = 0$ şartını sağlayan $c$ değeri kaçtır?`;
            q.options = {
                A: `${a - 1}`,
                B: `${a}`,
                C: `${a + 1}`,
                D: `${2*a}`,
                E: `0`
            };
            q.correct_answer = "B";
            q.solution = `1. Fonksiyonun türevi alınır: $f'(x) = 2x - ${2*a}$'dir.<br>2. Rolle teoremi gereği $f'(c) = 0 \\Rightarrow 2c - ${2*a} = 0 \\Rightarrow c = ${a}$ olarak elde edilir.`;
            break;
        }
    }
    
    // Add additional meta
    q.metadata = {
        domainKey: domainKey,
        domainTitle: KAZANIMLAR_DATA[domainKey]?.title || "Alan",
        kazanimId: kazanimId,
        kazanimText: KAZANIMLAR_DATA[domainKey]?.kazanimlar.find(k => k.id === kazanimId)?.text || "Kazanım",
        difficulty: "Orta",
        bloom: q.cognitive_analysis.bloom_level,
        solo: q.cognitive_analysis.solo_level,
        dok: q.cognitive_analysis.dok_level,
        theorems: q.cognitive_analysis.theorems_used,
        customInstructions: "",
        generationMode: "similar",
        timestamp: new Date().toLocaleString("tr-TR")
    };
    
    return q;
}



// Local offline similar question generator (Paralel Soru Motoru)



async function editQuestionWithGemini(currentQuestion, editInstruction, apiKey, model = "gemini-2.5-flash") {
    if (!apiKey) {
        throw new Error("Yapay zeka ile düzeltme yapabilmek için geçerli bir API anahtarı girmelisiniz.");
    }
    
    const systemPrompt = `Sen, ÖSYM standartlarında Matematik ÖABT sınavı için soru hazırlayan ve düzenleyen uzman bir Akademik Soru Hazırlama Komisyonu üyesisin.
Görevin, sana verilen mevcut matematik sorusunu, kullanıcının belirttiği düzeltme yönergesine göre güncellemek ve düzeltmektir.

Mevcut Soru JSON Formatı:
${JSON.stringify(currentQuestion, null, 2)}

DÜZENLEME KURALLARI VE SINIRLILIKLAR:
1. Sadece kullanıcının talep ettiği düzeltmeleri uygula. Geri kalan kısımları, soru yapısını, LaTeX biçimlendirmelerini ve pedagojik analizleri bozmadan koru.
2. Çizim içeren sorularda (SVG alanı doluysa veya kullanıcı çizim eklenmesini istiyorsa) SVG çizim koordinatlarını ve nesnelerini güncelle.
3. SVG Çizim kurallarına (Fiyonk/Dolgu/Izgara/Çakışma engeli) kesinlikle uymaya devam et:
   - Fonksiyon grafiklerinde veya çizgilerde mutlaka fill=\"none\" kullan.
   - Izgara çizgilerini stroke-width=\"0.5\" ve stroke-dasharray=\"2,4\" ile ince ve şeffaf yap.
   - Metin etiketlerine çakışma olmaması için offset ver.
4. Çıktıyı kesinlikle sadece ve sadece JSON formatında döndür. JSON bloğu dışında hiçbir açıklama, markdown kodu (json blokları vb.) ekleme. Yanıtın doğrudan { ile başlayıp } ile bitmelidir.`;

    const userPrompt = `Düzeltme Yönergesi: ${editInstruction}
Lütfen yukarıdaki kurallara göre soruyu güncelle ve yeni JSON nesnesini dize olarak döndür.`;

    const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;
    
    const requestBody = {
        contents: [
            {
                parts: [
                    { text: systemPrompt + "\n\n" + userPrompt }
                ]
            }
        ],
        generationConfig: {
            responseMimeType: "application/json"
        }
    };
    
    const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requestBody)
    });
    
    if (!response.ok) {
        const errData = await response.json();
        throw new Error(errData.error?.message || `HTTP hata kodu: ${response.status}`);
    }
    
    const data = await response.json();
    let text = data.candidates?.[0]?.content?.parts?.[0]?.text || "";
    text = text.trim();
    
    if (text.startsWith("```")) {
        text = text.replace(/^```json\s*/i, "").replace(/```$/, "").trim();
    }
    
    try {
        const updatedQuestion = JSON.parse(text);
        return updatedQuestion;
    } catch (e) {
        console.error("Gemini edit JSON parse error:", text);
        throw new Error("Yapay zeka geçerli bir soru JSON nesnesi döndüremedi. Lütfen tekrar deneyin.");
    }
}

// Calls Gemini API with custom past question (text or PDF/Image file) to generate similar question
async function generateSimilarQuestionFromCustomWithGemini(apiKey, model, customText, fileData, params) {
    try {
        const systemPrompt = buildSimilarSystemPrompt();
        
        // Construct user prompt
        let userPrompt = `Lütfen aşağıdaki kaynak soruyu analiz et ve bu soruya paralel, benzer mantıkta, aynı zorluk seviyesinde yepyeni bir ÖABT sorusu oluştur.\n\n`;
        if (customText) {
            userPrompt += `KAYNAK SORU METNİ:\n${customText}\n\n`;
        }
        if (fileData) {
            userPrompt += `Ek olarak, ekte paylaşılan PDF/Görsel dosyasındaki çıkmış soruyu oku ve temel al.\n\n`;
        }
        
        userPrompt += `Hedef Parametreler:\n`;
        userPrompt += `- Zorluk Derecesi: ${params.difficulty}\n`;
        userPrompt += `- Bloom Taksonomisi: ${params.bloom}\n`;
        userPrompt += `- SOLO Düzeyi: ${params.solo}\n`;
        userPrompt += `- Webb DOK Düzeyi: ${params.dok}\n`;
        
        userPrompt += `\nLütfen cevabı yukarıda belirtilen JSON formatında döndür. JSON nesnesi dışında hiçbir şey ekleme, doğrudan saf JSON dizesi olarak yanıt ver.`;

        const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;
        
        const parts = [];
        if (fileData) {
            parts.push({
                inlineData: {
                    mimeType: fileData.mimeType,
                    data: fileData.base64
                }
            });
        }
        parts.push({ text: systemPrompt + "\n\nKULLANICI TALEBİ:\n" + userPrompt });

        const requestBody = {
            contents: [
                { parts: parts }
            ],
            generationConfig: {
                responseMimeType: "application/json"
            }
        };

        const response = await fetch(endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestBody)
        });

        if (!response.ok) {
            const errData = await response.json();
            throw new Error(errData.error?.message || `HTTP hata kodu: ${response.status}`);
        }

        const data = await response.json();
        let text = data.candidates?.[0]?.content?.parts?.[0]?.text || "";
        text = text.trim();

        if (text.startsWith("```")) {
            text = text.replace(/^```json\s*/i, "").replace(/```$/, "").trim();
        }

        try {
            const generatedQuestion = JSON.parse(text);
            return generatedQuestion;
        } catch (e) {
            console.error("Gemini custom similar JSON parse error:", text);
            throw new Error("Yapay zeka geçerli bir benzer soru JSON nesnesi döndüremedi. Lütfen tekrar deneyin.");
        }
    } catch (e) {
        console.error("Error in generateSimilarQuestionFromCustomWithGemini:", e);
        throw e;
    }
}

// Expose exports
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        generateQuestionWithGemini,
        generateQuestionOffline,
        generateSimilarQuestionOffline,
        generateSimilarQuestionFromCustomWithGemini,
        editQuestionWithGemini
    };
}
