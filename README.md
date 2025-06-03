# Yonoco Landing Page

A landing page for the Yonoco app, built with Jekyll for GitHub Pages.

## Setup

1. Clone this repository
2. Install Jekyll and Bundler if you haven't already:
   ```
   gem install jekyll bundler
   ```
3. Install dependencies:
   ```
   bundle install
   ```
4. Run the development server:
   ```
   bundle exec jekyll serve
   ```
5. Visit `http://localhost:4000` in your browser

## Deployment

This site is designed to be deployed on GitHub Pages. To deploy:

1. Push your changes to the `main` branch of your GitHub repository
2. Go to your repository settings > Pages
3. Select the `main` branch as the source
4. Your site will be published at `https://yourusername.github.io/repository-name/`

## Customization

### App Links

Update the app store links in `_config.yml`:

```yaml
app_links:
  ios: https://apps.apple.com/app/your-app-id
  android: https://play.google.com/store/apps/details?id=your.app.id
```

### App Screenshot

**Important:** You need to add an app screenshot image at `assets/images/app-screenshot.png`. The current file is just a placeholder.

### Content

Edit the content in the following files:

- `index.html` (English home page)
- `fr/index.html` (French home page)
- `privacy-policy.html` (English privacy policy)
- `fr/privacy-policy.html` (French privacy policy)
- `terms-of-service.html` (English terms of service)
- `fr/terms-of-service.html` (French terms of service)

### Styling

Customize the styles in `assets/css/main.css`.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
