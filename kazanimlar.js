const KAZANIMLAR_DATA = {
    analiz: {
        title: "Analiz (Kalkülüs) - %36",
        kazanimlar: [
            { 
                id: "an_1", 
                text: "Polinomlar, İkinci Dereceden Denklemler ve Parabol",
                sub_kazanimlar: [
                    { id: "an_1_1", text: "Polinomlarda katsayılar toplamı ve kalan bulma işlemleri" },
                    { id: "an_1_2", text: "İkinci dereceden denklemlerin kök-katsayı ilişkileri" },
                    { id: "an_1_3", text: "Karmaşık sayılar kümesi ve temel cebirsel işlemler" },
                    { id: "an_1_4", text: "Parabol grafikleri, tepe noktası ve doğruyla kesişim durumları" },
                    { id: "an_1_5", text: "İkinci dereceden eşitsizlikler ve eşitsizlik sistemlerinin çözüm kümeleri" }
                ]
            },
            { 
                id: "an_2", 
                text: "Trigonometri ve Logaritma",
                sub_kazanimlar: [
                    { id: "an_2_1", text: "Sinüs ve Kosinüs teoremleri ile geometrik uygulamalar" },
                    { id: "an_2_2", text: "Ters trigonometrik ve periyodik fonksiyon analizleri" },
                    { id: "an_2_3", text: "Trigonometrik denklemler ve çözüm kümeleri" },
                    { id: "an_2_4", text: "Logaritma fonksiyonu, özellikleri ve üstel denklemler" },
                    { id: "an_2_5", text: "Logaritmik grafikler ve eşitsizliklerin çözüm aralıkları" }
                ]
            },
            { 
                id: "an_3", 
                text: "Fonksiyonlar ve Özel Tanımlı Fonksiyonlar",
                sub_kazanimlar: [
                    { id: "an_3_1", text: "Birebirlik, örtenlik ve fonksiyonlarda görüntü kümesi analizi" },
                    { id: "an_3_2", text: "Ters ve bileşke fonksiyon kuralları" },
                    { id: "an_3_3", text: "Parçalı ve mutlak değer fonksiyonları" },
                    { id: "an_3_4", text: "İşaret (signum) ve tam değer fonksiyonlarının analitiği" },
                    { id: "an_3_5", text: "Grafik ötelemeleri, yansıma ve simetri dönüşümleri" }
                ]
            },
            { 
                id: "an_4", 
                text: "Limit, Süreklilik ve Süreksizlik Türleri",
                sub_kazanimlar: [
                    { id: "an_4_1", text: "Sağdan ve soldan limitler ile limit kuralları" },
                    { id: "an_4_2", text: "Belirsizlik türleri (0/0, sonsuz/sonsuz, 1^sonsuz vb.)" },
                    { id: "an_4_3", text: "Noktasal süreklilik ve süreklilik teoremleri" },
                    { id: "an_4_4", text: "Kaldırılabilir, sıçrama ve sonsuz süreksizlik türleri" },
                    { id: "an_4_5", text: "Düzgün süreklilik kavramı ve aralık analizleri" }
                ]
            },
            { 
                id: "an_5", 
                text: "Türev ve Uygulamaları",
                sub_kazanimlar: [
                    { id: "an_5_1", text: "Türev tanımı, kısmi, zincir ve kapalı türev kuralları" },
                    { id: "an_5_2", text: "Belirsizliklerde L'Hôpital kuralı uygulaması" },
                    { id: "an_5_3", text: "Teğet ve normal doğrularının denklemleri" },
                    { id: "an_5_4", text: "Yerel ekstremum noktaları ve birinci/ikinci türev testleri" },
                    { id: "an_5_5", text: "Grafik çizimi: Eğrilik yönü, büküm noktası ve asimptotlar (düşey, yatay, eğik)" },
                    { id: "an_5_6", text: "Maksimum ve minimum optimizasyon problemleri" }
                ]
            },
            { 
                id: "an_6", 
                text: "İntegral ve Uygulamaları",
                sub_kazanimlar: [
                    { id: "an_6_1", text: "Belirsiz integral alma yöntemleri ve değişken değiştirme" },
                    { id: "an_6_2", text: "Kısmi entegrasyon ve özel dönüşüm yöntemleri" },
                    { id: "an_6_3", text: "Riemann toplamı, belirli integral özellikleri ve limit hesapları" },
                    { id: "an_6_4", text: "Belirli integral ile alan hesabı" },
                    { id: "an_6_5", text: "Hacim hesaplama (disk, rondela ve kabuk yöntemleri)" },
                    { id: "an_6_6", text: "Yay uzunluğu ve dönel yüzey alanı hesaplama" },
                    { id: "an_6_7", text: "Pappus-Guldin teoremleri ile hacim ve alan hesapları" }
                ]
            },
            { 
                id: "an_7", 
                text: "Reel Sayı Dizileri",
                sub_kazanimlar: [
                    { id: "an_7_1", text: "Monotonluk ve sınırlılık analizi" },
                    { id: "an_7_2", text: "Dizilerde limit tanımı ve sıkıştırma (sandwich) teoremi" },
                    { id: "an_7_3", text: "Cauchy dizileri ve yakınsaklık kriterleri" },
                    { id: "an_7_4", text: "Alt ve üst sınırlar (ebas/eküs) ile liminf/limsup analizleri" },
                    { id: "an_7_5", text: "Aritmetik ve geometrik dizilerin terim ilişkileri" }
                ]
            },
            { 
                id: "an_8", 
                text: "Sonsuz Seriler ve Yakınsaklık",
                sub_kazanimlar: [
                    { id: "an_8_1", text: "Serilerde kısmi toplamlar dizisi ve geometrik seriler" },
                    { id: "an_8_2", text: "Alterne seriler ve Leibniz yakınsaklık kriteri" },
                    { id: "an_8_3", text: "Mutlak ve koşullu yakınsaklık analizleri" },
                    { id: "an_8_4", text: "Pozitif terimli serilerde yakınsaklık testleri (integral, p-testi, karşılaştırma)" },
                    { id: "an_8_5", text: "Limit karşılaştırma, oran (D'Alembert) ve kök (Cauchy) testleri" }
                ]
            },
            { 
                id: "an_9", 
                text: "Kuvvet Serileri ve Taylor/Maclaurin",
                sub_kazanimlar: [
                    { id: "an_9_1", text: "Kuvvet serilerinde yakınsaklık yarıçapı ve yakınsaklık aralığı" },
                    { id: "an_9_2", text: "Kuvvet serilerinin terim terime türev ve integralinin alınması" },
                    { id: "an_9_3", text: "Taylor ve Maclaurin formülleri ile kalan terim analizi" },
                    { id: "an_9_4", text: "Temel fonksiyonların (sinx, cosx, e^x, ln(1+x)) seriye açılımları" }
                ]
            },
            { 
                id: "an_10", 
                text: "Çok Değişkenli Fonksiyonlar",
                sub_kazanimlar: [
                    { id: "an_10_1", text: "Çok değişkenli limit ve süreklilik (yörünge testleri)" },
                    { id: "an_10_2", text: "Kısmi türevler, zincir kuralı ve yönlü türev" },
                    { id: "an_10_3", text: "Seviye eğrileri (level curves) ve seviye yüzeyleri" },
                    { id: "an_10_4", text: "Teğet düzlemi ve normal doğrusu denklemleri" },
                    { id: "an_10_5", text: "Kritik noktalar, eyer noktaları ve iki değişkenli ekstremum (Hessian) testleri" }
                ]
            }
        ],
        theorems: [
            "Ortalama Değer Teoremi (MVT)",
            "Rolle Teoremi",
            "Bolzano / Ara Değer Teoremi (IVT)",
            "Analizin Temel Teoremi (FTC)",
            "L'Hopital Kuralı",
            "Sıkıştırma (Sandwich) Teoremi",
            "Weierstrass Yakınsaklık Teoremi",
            "Pappus-Guldin Teoremleri",
            "Green Teoremi",
            "Stokes Teoremi",
            "Diverjans (Gauss) Teoremi",
            "De Moivre Formülü",
            "Cauchy Yakınsaklık Kriteri",
            "Leibniz Kriteri (Alterne Seriler)",
            "Taylor Teoremi",
            "Dirichlet Yakınsaklık Testi",
            "D'Alembert Oran Testi",
            "Cauchy Kök Testi"
        ]
    },
    cebir: {
        title: "Cebir - %24",
        kazanimlar: [
            { 
                id: "cb_1", 
                text: "Sayılar ve Modüler Aritmetik",
                sub_kazanimlar: [
                    { id: "cb_1_1", text: "Bölünebilme kuralları, asallık ve aritmetiğin temel teoremi" },
                    { id: "cb_1_2", text: "EBOB-EKOK özellikleri ve Öklid algoritması" },
                    { id: "cb_1_3", text: "Doğrusal Diophantine denklemleri ve çözüm bulma" },
                    { id: "cb_1_4", text: "Euler phi-fonksiyonu ve sayısal uygulamaları" },
                    { id: "cb_1_5", text: "Kongrüanslar, doğrusal kongrüans sistemleri ve Çin kalan teoremi (CRT)" },
                    { id: "cb_1_6", text: "Modüler aritmetikte Fermat ve Euler teoremleri" }
                ]
            },
            { 
                id: "cb_2", 
                text: "Soyut Cebir (Grup Teorisi)",
                sub_kazanimlar: [
                    { id: "cb_2_1", text: "Grup tanımı, özellikleri ve alt gruplar" },
                    { id: "cb_2_2", text: "Devirli gruplar, üreteçler ve Lagrange teoremi" },
                    { id: "cb_2_3", text: "Normal alt gruplar ve bölüm grupları" },
                    { id: "cb_2_4", text: "Simetrik ve permütasyon grupları (Sn, An)" },
                    { id: "cb_2_5", text: "Grup homomorfizmaları, izomorfizmaları ve çekirdek (kernel) analizleri" },
                    { id: "cb_2_6", text: "Direkt çarpım grupları ve yapısal sınıflandırmalar" }
                ]
            },
            { 
                id: "cb_3", 
                text: "Halkalar ve Cisimler",
                sub_kazanimlar: [
                    { id: "cb_3_1", text: "Halka tanımı, alt halkalar ve sıfır bölenler" },
                    { id: "cb_3_2", text: "İntegral bölge, cisim tanımları ve alt cisimler" },
                    { id: "cb_3_3", text: "İdealler, bölüm halkaları ve asal/maksimal idealler" },
                    { id: "cb_3_4", text: "Nilpotent, idempotent ve birim eleman analizleri" },
                    { id: "cb_3_5", text: "Polinom halkaları (F[x]) ve indirgenemez polinomlar" },
                    { id: "cb_3_6", text: "Cisim genişlemeleri, cebirsel ve transandant elemanlar" }
                ]
            },
            { 
                id: "cb_4", 
                text: "Lineer Cebir (Vektör Uzayları)",
                sub_kazanimlar: [
                    { id: "cb_4_1", text: "Vektör uzayları, alt uzaylar ve lineer bağımsızlık" },
                    { id: "cb_4_2", text: "Germe (span), taban (baz) ve boyut (dimension)" },
                    { id: "cb_4_3", text: "İç çarpım uzayları: Norm, açı, ortalık ve ortonormal tabanlar" },
                    { id: "cb_4_4", text: "Gram-Schmidt dikleştirme yöntemi ve izdüşüm vektörleri" },
                    { id: "cb_4_5", text: "Lineer dönüşümler, çekirdek, görüntü ve Rank-Nullity teoremi" },
                    { id: "cb_4_6", text: "Lineer dönüşümlerin matris temsilcileri, iz ve determinant ilişkileri" }
                ]
            },
            { 
                id: "cb_5", 
                text: "Matrisler ve Özdeğerler",
                sub_kazanimlar: [
                    { id: "cb_5_1", text: "Matris işlemleri, transpoz, ters matris ve determinant özellikleri" },
                    { id: "cb_5_2", text: "Lineer denklem sistemleri, eşelon form ve çözümler" },
                    { id: "cb_5_3", text: "Özdeğerler, özvektörler ve özuzay hesaplamaları" },
                    { id: "cb_5_4", text: "Karakteristik polinom ve köşegenleştirme (diagonalization) kuralları" },
                    { id: "cb_5_5", text: "Cayley-Hamilton teoremi ve matris indirgemesi" }
                ]
            }
        ],
        theorems: [
            "Fermat'nın Küçük Teoremi",
            "Euler Teoremi",
            "Çin Kalan Teoremi (CRT)",
            "Wilson Teoremi",
            "Lagrange Teoremi (Grup Teorisi)",
            "Birinci İzomorfizma Teoremi",
            "Cayley-Hamilton Teoremi",
            "Rank-Nullity Teoremi",
            "Gram-Schmidt Dikleştirme Teoremi",
            "Spektral Teorem"
        ]
    },
    geometri: {
        title: "Geometri - %24",
        kazanimlar: [
            { 
                id: "geo_1", 
                text: "Sentetik (Düzlem) Geometri",
                sub_kazanimlar: [
                    { id: "geo_1_1", text: "Üçgenlerin açı ve kenar bağıntıları, benzerlik ve alan formülleri" },
                    { id: "geo_1_2", text: "Çokgenler ve düzgün çokgen özellikleri" },
                    { id: "geo_1_3", text: "Özel dörtgenler (yamuk, paralelkenar, eşkenar dörtgen, deltoid)" },
                    { id: "geo_1_4", text: "Çemberde açılar, teğet/kiriş özellikleri ve çemberin gücü" },
                    { id: "geo_1_5", text: "Dairenin çevresi, alanı ve daire dilimleri" },
                    { id: "geo_1_6", text: "Ceva ve Menelaus teoremleri ile oran ilişkileri" }
                ]
            },
            { 
                id: "geo_2", 
                text: "Katı Cisimler ve Dönüşümler",
                sub_kazanimlar: [
                    { id: "geo_2_1", text: "Prizma ve piramitlerin yüzey alanı ve hacim hesapları" },
                    { id: "geo_2_2", text: "Silindir, koni ve küre alan/hacim bağıntıları" },
                    { id: "geo_2_3", text: "Cavalieri ilkesi ve kesik cisimlerin hacimleri" },
                    { id: "geo_2_4", text: "Öteleme, dönme ve yansıma (simetri) dönüşümleri" },
                    { id: "geo_2_5", text: "Homoteti (benzerlik) dönüşümü ve ölçeklendirme" }
                ]
            },
            { 
                id: "geo_3", 
                text: "Uzayda Vektörler ve İzdüşüm",
                sub_kazanimlar: [
                    { id: "geo_3_1", text: "Vektörlerde toplama, skalerle çarpma ve paralellik" },
                    { id: "geo_3_2", text: "Skaler (iç) çarpım, iki vektör arası açı ve diklik" },
                    { id: "geo_3_3", text: "Vektörel çarpım, geometrik anlamı ve paralelkenar alanı" },
                    { id: "geo_3_4", text: "Karma çarpım ve paralelyüzün hacimsel yorumu" },
                    { id: "geo_3_5", text: "Bir vektörün başka bir vektör üzerindeki dik izdüşüm vektörü" }
                ]
            },
            { 
                id: "geo_4", 
                text: "Uzayda Doğru ve Düzlem",
                sub_kazanimlar: [
                    { id: "geo_4_1", text: "Uzayda doğrunun vektörel, parametrik ve kartezyen denklemleri" },
                    { id: "geo_4_2", text: "Uzayda düzlem denklemleri ve düzlem demeti" },
                    { id: "geo_4_3", text: "Doğru-doğru, doğru-düzlem, düzlem-düzlem kesişim durumları" },
                    { id: "geo_4_4", text: "Noktanın doğruya ve düzleme olan uzaklığı" },
                    { id: "geo_4_5", text: "Kesişmeyen aykırı doğrular arasındaki en kısa uzaklık ve ortak dikme" },
                    { id: "geo_4_6", text: "Uzayda noktanın, doğrunun ve düzlemin birbirine göre simetrileri" }
                ]
            },
            { 
                id: "geo_5", 
                text: "Yüzeyler",
                sub_kazanimlar: [
                    { id: "geo_5_1", text: "Küre denklemleri, merkez/yarıçap ve teğet düzlem denklemleri" },
                    { id: "geo_5_2", text: "Silindirik ve dönel yüzeylerin kartezyen denklemleri" },
                    { id: "geo_5_3", text: "Koni yüzey denklemleri" },
                    { id: "geo_5_4", text: "Kuadratik yüzeylerin (elipsoid, paraboloid, hiperboloid) özellikleri" },
                    { id: "geo_5_5", text: "Silindirik ve küresel koordinat dönüşümleri" }
                ]
            },
            { 
                id: "geo_6", 
                text: "Konikler ve Eksen Dönmesi",
                sub_kazanimlar: [
                    { id: "geo_6_1", text: "Parabolün standart denklemi, odak, doğrultman ve teğet doğruları" },
                    { id: "geo_6_2", text: "Elipsin standart denklemi, odaklar ve asal eksen boyutları" },
                    { id: "geo_6_3", text: "Hiperbolün standart denklemi, odaklar, asimptotlar ve teğetleri" },
                    { id: "geo_6_4", text: "Koniklerin genel ikinci dereceden denklemleri ve diskriminant sınıflandırması" },
                    { id: "geo_6_5", text: "Genel konik denkleminde eksen dönmesi ile xy terimini yok etme" }
                ]
            }
        ],
        theorems: [
            "İzdüşüm Teoremi",
            "Karma Çarpımın Hacimsel Yorumu",
            "Koniklerin Odak-Doğrultman Tanımı",
            "Cavalieri İlkesi",
            "Ceva ve Menelaus Teoremleri",
            "Ptolemy (Batlamyus) Teoremi",
            "Euler Doğrusu ve Dokuz Nokta Çemberi"
        ]
    },
    uygulamali_matematik: {
        title: "Uygulamalı Matematik - %16",
        kazanimlar: [
            { 
                id: "um_1", 
                text: "İstatistik",
                sub_kazanimlar: [
                    { id: "um_1_1", text: "Merkezi eğilim (ortalama, medyan, mod) ölçüleri" },
                    { id: "um_1_2", text: "Merkezi yayılım (ranj, standart sapma, varyans) ölçüleri" },
                    { id: "um_1_3", text: "Bağıl değişkenlik katsayısı ve yorumu" },
                    { id: "um_1_4", text: "Standart puan dönüşümleri (z-puanı ve T-puanı)" }
                ]
            },
            { 
                id: "um_2", 
                text: "Olasılık ve Dağılımlar",
                sub_kazanimlar: [
                    { id: "um_2_1", text: "Koşullu olasılık ve Bayes teoremi uygulamaları" },
                    { id: "um_2_2", text: "Rastgele değişkenler, olasılık fonksiyonları ve beklenen değer/varyans" },
                    { id: "um_2_3", text: "Momentler ve moment üreten fonksiyonlar (MGF)" },
                    { id: "um_2_4", text: "Kesikli dağılımlar (Bernoulli, Binom, Poisson, Hipergeometrik)" },
                    { id: "um_2_5", text: "Sürekli dağılımlar (Normal dağılım ve z-tablosu kullanımı)" }
                ]
            },
            { 
                id: "um_3", 
                text: "Diferansiyel Denklemler",
                sub_kazanimlar: [
                    { id: "um_3_1", text: "Diferansiyel denklemlerin sınıflandırılması (mertebe, derece, doğrusallık)" },
                    { id: "um_3_2", text: "Birinci mertebeden ayrılabilir ve homojen denklemler" },
                    { id: "um_3_3", text: "Tam diferansiyel denklemler ve integral çarpanı bulma" },
                    { id: "um_3_4", text: "Birinci mertebeden doğrusal denklemler ve Bernoulli denklemleri" },
                    { id: "um_3_5", text: "Başlangıç değer problemleri ve Picard varlık-teklik teoremi" }
                ]
            }
        ],
        theorems: [
            "Bayes Teoremi",
            "Merkezi Limit Teoremi (CLT)",
            "Büyük Sayılar Yasası (LLN)",
            "Chebyshev Eşitsizliği",
            "Picard-Lindelöf Varlık ve Teklik Teoremi",
            "Abel Teoremi (Wronskiyen)"
        ]
    },
    alan_egitimi: {
        title: "Alan Eğitimi - %20",
        kazanimlar: [
            { 
                id: "ae_1", 
                text: "Bilişsel Gelişim Kuramları",
                sub_kazanimlar: [
                    { id: "ae_1_1", text: "APOS kuramı bilişsel aşamaları (Eylem-İşlem-Nesne-Şema)" },
                    { id: "ae_1_2", text: "SOLO taksonomisi düzeyleri ve durum teşhisleri" },
                    { id: "ae_1_3", text: "Van Hiele geometrik düşünme düzeyleri" },
                    { id: "ae_1_4", text: "Yenilenmiş Bloom taksonomisi bilgi ve bilişsel süreç boyutları" }
                ]
            },
            { 
                id: "ae_2", 
                text: "Öğrenciyi Anlama Bilgisi",
                sub_kazanimlar: [
                    { id: "ae_2_1", text: "Matematiksel kavram yanılgıları ve zihinsel nedenleri" },
                    { id: "ae_2_2", text: "Öğrenci işlemsel hatalarının teşhis edilmesi ve analizi" },
                    { id: "ae_2_3", text: "Öğrenme sürecindeki epistemolojik ve bilişsel engeller" }
                ]
            },
            { 
                id: "ae_3", 
                text: "Müfredat ve Öğretim Programı Bilgisi",
                sub_kazanimlar: [
                    { id: "ae_3_1", text: "Kazanım sınırlarının ve sınıf düzeylerinin öğretim programındaki dağılımı" },
                    { id: "ae_3_2", text: "Öğretim programı kazanım ifadeleri, kriterleri ve öğretim önerileri" },
                    { id: "ae_3_3", text: "Temalar, ortak beceriler ve süreç becerilerinin ilişkilendirilmesi" }
                ]
            },
            { 
                id: "ae_4", 
                text: "Öğretim Stratejileri ve Temsiller",
                sub_kazanimlar: [
                    { id: "ae_4_1", text: "Somut materyaller, modeller ve pedagojik rolleri" },
                    { id: "ae_4_2", text: "Dinamik matematik yazılımları (GeoGebra vb.) ve görsel temsiller" },
                    { id: "ae_4_3", text: "Teknolojik pedagojik alan bilgisi (TPAB) entegrasyonu" }
                ]
            }
        ],
        theorems: [
            "Lee Shulman'ın PCK Modeli",
            "APOS Kuramı (Eylem-İşlem-Nesne-Şema)",
            "SOLO Taksonomisi",
            "Van Hiele Geometrik Düşünme Düzeyleri",
            "Yenilenmiş Bloom Taksonomisi",
            "Brousseau'nun Didaktik Durumlar Teorisi",
            "Webb'in Bilgi Derinliği (DOK)"
        ]
    }
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { KAZANIMLAR_DATA };
}
