import React from 'react';
import './App.css';

function App() {
  const currentYear = new Date().getFullYear();

  const handleBannerClick = () => {
    window.open('https://enderhost.co/', '_blank');
  };

  const handleDownload = () => {
    // Create a sample download for demonstration
    // In a real scenario, this would link to the actual STALKED download
    const element = document.createElement('a');
    element.href = './stalked.zip'; // Replace with actual download URL
    element.download = 'STALKED.zip';
    element.click();
  };

  return (
    <div className="min-h-screen bg-ios-background relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-ios-primary/10 via-transparent to-ios-secondary/10 pointer-events-none" />
      
      {/* Floating orbs for visual interest */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-ios-primary/20 rounded-full blur-3xl floating-element" />
      <div className="absolute top-40 right-20 w-96 h-96 bg-ios-secondary/15 rounded-full blur-3xl floating-element" style={{animationDelay: '1s'}} />
      <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-ios-primary/10 rounded-full blur-3xl floating-element" style={{animationDelay: '2s'}} />
      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 relative z-10">
        {/* Hero Section */}
        <section className="text-center mb-16 animate-fade-in">
          <div className="inline-block mb-8">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 ios-text-primary animate-float">
              STALKED
            </h1>
            <div className="h-1 w-32 bg-gradient-to-r from-ios-primary to-ios-secondary mx-auto rounded-full" />
          </div>
          <p className="text-2xl md:text-3xl ios-text-secondary mb-8">
            The Ultimate Multiplayer Survival Experience
          </p>
          <div className="max-w-3xl mx-auto">
            <p className="ios-text-tertiary text-lg leading-relaxed">
              Enter a world where survival is your only goal. Team up with friends, 
              face terrifying threats, and build your legacy in the most intense 
              multiplayer survival game ever created.
            </p>
          </div>
        </section>

        {/* Download Section */}
        <section className="mb-16 animate-slide-up">
          <div className="max-w-4xl mx-auto glass-card glass-card-hover p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 ios-text-primary">
              Download STALKED
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="text-center">
                <div className="ios-surface rounded-2xl p-6 mb-4 border border-ios-separator">
                  <h3 className="text-xl font-semibold mb-2 ios-text-secondary">Windows</h3>
                  <p className="ios-text-tertiary mb-4">Recommended for most players</p>
                  <div className="text-sm ios-text-tertiary">
                    Version 0.1b • Size: ~38 MB
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <div className="ios-surface rounded-2xl p-6 mb-4 border border-ios-separator">
                  <h3 className="text-xl font-semibold mb-2 ios-text-secondary">Requirements</h3>
                  <ul className="ios-text-tertiary text-sm space-y-1">
                    <li>• Windows 7/8/10/11 (32/64-bit)</li>
                    <li>• 2 GB RAM</li>
                    <li>• DirectX 9 compatible graphics</li>
                    <li>• 100 MB free space</li>
                    <li>• Python 3.8+ (included)</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="text-center">
              <button
                onClick={handleDownload}
                className="ios-button text-lg px-12 py-4 text-white font-semibold rounded-2xl shadow-ios-card hover:shadow-ios-card-hover transform hover:scale-105 transition-all duration-300"
              >
                Download Now
              </button>
              <p className="ios-text-tertiary text-sm mt-4">
                Free to play • No registration required
              </p>
            </div>
          </div>
        </section>

        {/* Complete Features Section with 3D Scrolling Effect */}
        <section className="mb-16 overflow-hidden -mx-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 ios-text-primary">
            Complete Feature Set
          </h2>
          <div className="relative perspective-1000">
            {/* 3D Scrolling container */}
            <div className="flex animate-scroll-3d transform-gpu">
              {/* First set of cards */}
              {[
                { title: 'Health System', desc: '6-heart health system with invulnerability frames' },
                { title: 'Sword Combat', desc: 'Directional sword attacks with collision detection' },
                { title: 'Immunity Boost', desc: '10-second immunity protection from damage' },
                { title: 'Speed Boost', desc: '25% speed increase for enhanced mobility' },
                { title: 'Medkit System', desc: 'Full health restoration with strategic spawning' },
                { title: 'Small Health', desc: 'Partial health recovery from red apples' },
                { title: '8 Achievements', desc: 'Unlock achievements for various accomplishments' },
                { title: 'Scoring System', desc: 'Points for survival time and enemy defeats' },
                { title: 'Character Selection', desc: 'Default, Doomslayer, and Dragonborn skins' },
                { title: 'Multiplayer Mode', desc: 'Join servers with real-time player sync' },
                { title: 'Server Browser', desc: 'Add custom servers and community servers' },
                { title: 'Limited Vision', desc: 'Dynamic lighting system with restricted view' },
                { title: 'Enemy AI', desc: 'Smart chaser enemies with respawning system' },
                { title: 'Difficulty Levels', desc: 'Easy, Medium, and Hard modes' },
                { title: 'Dynamic Audio', desc: 'Menu and game music with sound effects' }
              ].map((feature, index) => (
                <div key={`first-${index}`} className="glass-card-3d rounded-2xl p-6 mx-4 min-w-[280px] flex-shrink-0 transform-gpu">
                  <div className="w-12 h-12 bg-gradient-to-br from-ios-primary to-ios-primary/50 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-white font-bold text-lg">{index + 1}</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 ios-text-secondary">{feature.title}</h3>
                  <p className="ios-text-tertiary text-sm">{feature.desc}</p>
                </div>
              ))}
              
              {/* Duplicate set for seamless scrolling */}
              {[
                { title: 'Health System', desc: '6-heart health system with invulnerability frames' },
                { title: 'Sword Combat', desc: 'Directional sword attacks with collision detection' },
                { title: 'Immunity Boost', desc: '10-second immunity protection from damage' },
                { title: 'Speed Boost', desc: '25% speed increase for enhanced mobility' },
                { title: 'Medkit System', desc: 'Full health restoration with strategic spawning' },
                { title: 'Small Health', desc: 'Partial health recovery from red apples' },
                { title: '8 Achievements', desc: 'Unlock achievements for various accomplishments' },
                { title: 'Scoring System', desc: 'Points for survival time and enemy defeats' },
                { title: 'Character Selection', desc: 'Default, Doomslayer, and Dragonborn skins' },
                { title: 'Multiplayer Mode', desc: 'Join servers with real-time player sync' },
                { title: 'Server Browser', desc: 'Add custom servers and community servers' },
                { title: 'Limited Vision', desc: 'Dynamic lighting system with restricted view' },
                { title: 'Enemy AI', desc: 'Smart chaser enemies with respawning system' },
                { title: 'Difficulty Levels', desc: 'Easy, Medium, and Hard modes' },
                { title: 'Dynamic Audio', desc: 'Menu and game music with sound effects' }
              ].map((feature, index) => (
                <div key={`second-${index}`} className="glass-card-3d rounded-2xl p-6 mx-4 min-w-[280px] flex-shrink-0 transform-gpu">
                  <div className="w-12 h-12 bg-gradient-to-br from-ios-primary to-ios-primary/50 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-white font-bold text-lg">{index + 1}</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 ios-text-secondary">{feature.title}</h3>
                  <p className="ios-text-tertiary text-sm">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Server Hosting CTA */}
        <section className="text-center animate-slide-up" style={{animationDelay: '0.4s'}}>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 ios-text-primary">
              Want to Host Your Own Server?
            </h2>
            <p className="text-xl mb-8 ios-text-secondary">
              Get professional server hosting at EnderHost
            </p>
            <button
              onClick={handleBannerClick}
              className="ios-button text-lg px-12 py-4 text-white font-semibold rounded-2xl shadow-ios-card hover:shadow-ios-card-hover transform hover:scale-105 transition-all duration-300"
            >
              Start Hosting at EnderHost
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="ios-surface border-t border-ios-separator py-8 mt-16 relative z-10">
        <div className="container mx-auto px-4 text-center">
          <p className="ios-text-tertiary mb-4">
            © {currentYear} VoltacceptYT
          </p>
          <p className="ios-text-tertiary text-sm">
            Server hosting provided by <a href="https://enderhost.co/" target="_blank" rel="noopener noreferrer" className="ios-text-secondary hover:text-ios-primary transition-colors duration-300">EnderHost</a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
