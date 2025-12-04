import { motion } from 'framer-motion';
import { Star, Award, Clock } from 'lucide-react';

export default function AboutSection() {
  const features = [
    {
      icon: Star,
      title: 'Michelin Recognized',
      description: 'Awarded for culinary excellence and cosmic creativity.',
    },
    {
      icon: Award,
      title: 'Award Winning',
      description: 'Best innovative dining experience three years running.',
    },
    {
      icon: Clock,
      title: 'Est. 2020',
      description: 'Five years of creating stellar dining memories.',
    },
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-medium tracking-widest uppercase text-primary mb-4 block">
              Our Story
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold mb-6" data-testid="text-about-heading">
              A Journey Through the Stars
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Nebula Kitchen was born from a dream to create dining experiences that transcend 
                the ordinary. Our founder, Chef Aurora Stellaris, envisioned a place where the 
                mysteries of the cosmos could be tasted in every bite.
              </p>
              <p>
                Every dish on our menu is a celestial creation, combining traditional techniques 
                with innovative molecular gastronomy to produce flavors that are truly out of this world.
              </p>
              <p>
                From the moment you step through our doors, you embark on an interstellar journey 
                that engages all your senses and leaves you with memories that shine as bright as 
                the stars themselves.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-8">
              {features.map((feature) => (
                <div key={feature.title} className="text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-3">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h4 className="font-medium text-sm mb-1">{feature.title}</h4>
                  <p className="text-xs text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-gradient-to-br from-primary/30 via-accent/20 to-secondary/30 p-1">
              <div className="w-full h-full rounded-xl bg-card/50 backdrop-blur-sm flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-24 h-24 rounded-full bg-primary/30 mx-auto mb-6 flex items-center justify-center">
                    <Star className="w-12 h-12 text-primary" />
                  </div>
                  <p className="font-serif text-2xl font-semibold mb-2">Chef Aurora Stellaris</p>
                  <p className="text-sm text-muted-foreground">Founder & Executive Chef</p>
                </div>
              </div>
            </div>
            <div className="absolute -z-10 -top-4 -right-4 w-full h-full rounded-2xl bg-gradient-to-br from-primary/20 to-transparent" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
