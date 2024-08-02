# Playwright ve Artillery Projesi

Bu proje, Playwright ile end-to-end testleri ve Artillery ile yük testleri yapmanızı sağlar.

## Kurulum

1. Bu proje dizinine gidin:

    ```bash
    cd project-root
    ```

2. Bağımlılıkları yükleyin:

    ```bash
    npm install
    ```

## Playwright ile Testler

Playwright, web uygulamalarını test etmek için kullanılan bir otomasyon kütüphanesidir. Testler `playwright/tests/` dizininde bulunur.

### Testleri Çalıştırma

1. Testleri kaydetmek için:

    ```bash
    npx playwright codegen <URL>
    ```

2. Testleri başlatmak için:

    ```bash
    npx playwright test
    ```

3. Test sonuçlarını görmek için, `playwright-report` testlerinin sonucunu kontrol edin.

## Artillery ile Yük Testleri

Artillery, yüksek performanslı yük testleri yapmak için kullanılan bir araçtır. Yük testleri `artillery.yml` dosyasına göre yapılandırılır.

### Yük Testlerini Çalıştırma

1. Yük testlerini başlatmak için:

    ```bash
    artillery run artillery.yml
    ```
2. HTML report oluşturmak için:

    ```bash
    artillery run artillery.yml --output results.json
    artillery report results.json
    ```

3. Yük testi sonuçlarını `results.json` veta `terminal` çıktısından kontrol edebilirsiniz.

## Proje Yapısı

- `playwright-artillery-performance-testing/` - Playwright testleri ve yapılandırma dosyalarını içerir.
  - `tests/` - Test senaryolarını içeren dizin.
- `playwright.config.ts` - Playwright yapılandırma dosyası.
- `artillery.yml` - Artillery yük test yapılandırma dosyasını içerir.
- `.gitignore` - Git tarafından yoksayılan dosyalar.
- `package.json` - Proje bağımlılıkları ve komutları.
- `README.md` 