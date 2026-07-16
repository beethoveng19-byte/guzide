const KAZANIMLAR_DATA = {
    analiz: {
        title: "Analiz (Kalkülüs) - %36",
        kazanimlar: [
            { id: "an_1", text: "Polinomlar, İkinci Dereceden Denklemler ve Parabol: Katsayılar toplamı, kalan bulma, karmaşık sayılar, parabol durumları ve eşitsizlikler" },
            { id: "an_2", text: "Trigonometri ve Logaritma: Sinüs/Kosinüs teoremleri, ters trigonometrik/periyodik fonksiyonlar, denklemler, logaritma grafikleri ve eşitsizlikleri" },
            { id: "an_3", text: "Fonksiyonlar ve Özel Tanımlı Fonksiyonlar: Birebir, örten, ters/bileşke fonksiyonlar. Parçalı, mutlak değer, işaret (signum), tam değer fonksiyonları ve grafik ötelemeleri/simetri" },
            { id: "an_4", text: "Limit, Süreklilik ve Süreksizlik Türleri: Sağdan/soldan limit, belirsizlik türleri, süreklilik, kaldırılabilir/sıçrama/sonsuz süreksizlikler ve düzgün süreklilik" },
            { id: "an_5", text: "Türev ve Uygulamaları: Kısmi/zincir/kapalı türev kuralları, L'Hôpital, maksimum-minimum problemleri, teğet/normal denklemleri, ekstremum, eğrilik yönü ve asimptotlar (düşey, yatay, eğik, eğri)" },
            { id: "an_6", text: "İntegral ve Uygulamaları: Belirsiz integral alma yöntemleri, değişken değiştirme, özel dönüşümler, Riemann toplamı, alan/hacim (kabuk yöntemi), yay uzunluğu ve dönel yüzey alanı, Pappus-Guldin teoremleri" },
            { id: "an_7", text: "Reel Sayı Dizileri: Monotonluk, sınırlılık, Cauchy dizileri, alt ve üst sınırlar (Ebas/Eküs), dizilerde limit ve aritmetik/geometrik dizi özellikleri" },
            { id: "an_8", text: "Sonsuz Seriler ve Yakınsaklık: Geometrik seriler, alterne seriler (Leibniz kriteri), mutlak/koşullu yakınsaklık, integral testi, p-testi, karşılaştırma testleri ve oran/kök testleri" },
            { id: "an_9", text: "Kuvvet Serileri ve Taylor/Maclaurin: Yakınsaklık yarıçapı ve aralığı, kuvvet serilerinin türev ve integrali, Taylor ve Maclaurin serileri ile fonksiyon açılımları" },
            { id: "an_10", text: "Çok Değişkenli Fonksiyonlar: Limit/süreklilik, kısmi türevler, seviye eğrileri (level curves), teğet düzlemi, kritik noktalar, eyer (saddle) noktası ve iki değişkenli ekstremum testleri" }
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
            { id: "cb_1", text: "Sayılar ve Modüler Aritmetik: Bölünebilme, asallık, EBOB-EKOK, Diophantine denklemleri, Euler phi-fonksiyonu, kongrüanslar ve modüler aritmetik uygulamaları" },
            { id: "cb_2", text: "Soyut Cebir (Grup Teorisi): Alt/normal/bölüm/devirli gruplar, Lagrange, simetrik ve permütasyon grupları, homomorfizma, izomorfizma ve direkt çarpım grupları" },
            { id: "cb_3", text: "Halkalar ve Cisimler: Halka, alt halka, sıfır bölenler, bölüm halkası, idealler, nilpotent elemanlar, polinom halkası, cisim genişlemeleri, cebirsel ve transandant sayılar" },
            { id: "cb_4", text: "Lineer Cebir (Vektör Uzayları): Lineer bağımsızlık, taban ve boyut, iç çarpım uzayları (norm, ortonormal baz, direkt toplam), lineer dönüşümler (iz, determinant, alan/hacim)" },
            { id: "cb_5", text: "Matrisler ve Özdeğerler: Matris işlemleri, transpoz, ters, lineer denklem sistemleri, karakteristik değer/vektör/polinom, karakteristik uzay ve Cayley-Hamilton teoremi" }
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
            { id: "geo_1", text: "Sentetik (Düzlem) Geometri: Üçgenler (açı-kenar, eşlik, benzerlik, alan), çokgenler, özel dörtgenler (paralelkenar, dikdörtgen, kare, yamuk, deltoid), çember ve daire özellikleri" },
            { id: "geo_2", text: "Katı Cisimler ve Dönüşümler: Prizma, piramit, silindir, koni, küre alan/hacim bağıntıları. Öteleme, dönme, yansıma ve homoteti dönüşümleri" },
            { id: "geo_3", text: "Uzayda Vektörler ve İzdüşüm: Paralellik, skaler/vektörel/karma çarpım, iki vektör arası açı, dik izdüşüm vektörü, paralelkenar alanı ve paralelyüzün hacmi" },
            { id: "geo_4", text: "Uzayda Doğru ve Düzlem: Doğru/düzlem denklemleri, uzaklıklar, aykırı doğrular arası en kısa uzaklık, ortak dikme ayakları, düzlem demeti ve uzayda simetri" },
            { id: "geo_5", text: "Yüzeyler: Küre denklemi, teğet düzlemi, silindir, koni, kuadratik ve dönel yüzey denklemleri, silindirik ve küresel koordinat dönüşümleri" },
            { id: "geo_6", text: "Konikler ve Eksen Dönmesi: Parabol, elips, hiperbol standart/parametrik denklemleri, teğet/normal doğruları, genel konik denkleminde xy'li terimi yok etme" }
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
            { id: "um_1", text: "İstatistik: Merkezi eğilim (ortalama, medyan, mod) ve yayılım (açıklık, standart sapma, varyans) ölçüleri, bağıl değişkenlik katsayısı, z ve T puanı standartlaştırmaları" },
            { id: "um_2", text: "Olasılık ve Dağılımlar: Koşullu olasılık, Bayes, rastgele değişkenler, beklenen değer, varyans, momentler ve moment üreten fonksiyonlar, Binom, Poisson, Hipergeometrik ve Normal dağılim" },
            { id: "um_3", text: "Diferansiyel Denklemler: Sınıflandırma (mertebe, derece), birinci mertebeden denklemler (ayrılabilir, homojen, tam, doğrusal, integral çarpanı), başlangıç değer problemleri" }
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
            { id: "ae_1", text: "Bilişsel Gelişim Kuramları: APOS Teorisi, SOLO Taksonomisi, Van Hiele Geometrik Düşünme Düzeyleri ve Yenilenmiş Bloom Taksonomisi" },
            { id: "ae_2", text: "Öğrenciyi Anlama Bilgisi: Matematiksel kavram yanılgıları, öğrenci hatalarının analizi ve zorluk çekilen konuların teşhisi" },
            { id: "ae_3", text: "Müfredat ve Öğretim Programı Bilgisi: Kazanım sınırları, sınıf düzeylerinin analizi ve öğretim programı temaları" },
            { id: "ae_4", text: "Öğretim Stratejileri ve Temsiller: Somut materyaller, modeller ve dinamik matematik yazılımları (GeoGebra vb.) kullanımı" }
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

// If running in browser or Node.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { KAZANIMLAR_DATA };
}
