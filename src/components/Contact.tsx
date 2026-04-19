export default function Contact() {
  return (
    <section id='contact' className='py-24 px-6 bg-cream relative overflow-hidden'>
      {/* Decorative blobs */}
      <div className='absolute top-0 right-0 w-96 h-96 bg-blush/10 rounded-full blur-3xl' />
      <div className='absolute bottom-0 left-0 w-72 h-72 bg-lavender/10 rounded-full blur-3xl' />

      <div className='max-w-3xl mx-auto text-center relative z-10'>
        <p className='font-body text-sm tracking-[0.3em] uppercase text-blush-dark mb-3'>
          ✦ Get In Touch
        </p>
        <h2 className='font-display text-6xl md:text-9xl tracking-wider text-charcoal mb-6'>
          LET'S CREATE
          <br />
          <span className='text-transparent bg-clip-text bg-gradient-to-r from-blush-dark via-lavender to-peach'>
            TOGETHER
          </span>
        </h2>
        <p className='font-body text-warm-gray text-lg leading-relaxed mb-10 max-w-lg mx-auto'>
          Have a project in mind? I'd love to hear about it. Drop me a message and let's make
          something beautiful.
        </p>

        <div className='flex flex-col sm:flex-row items-center justify-center gap-4'>
          <a
            href='mailto:mahfuza.molee@gmail.com'
            className='inline-flex items-center gap-2 px-10 py-4 rounded-full bg-charcoal text-cream font-body text-lg tracking-wide hover:bg-blush-dark transition-all duration-300 hover:scale-105'>
            Say Hello ♡
          </a>
          <a
            href='mailto:mahfuza.molee@grey.com'
            className='inline-flex items-center gap-2 px-10 py-4 rounded-full border-2 border-charcoal/20 text-charcoal font-body text-lg tracking-wide hover:border-blush-dark hover:text-blush-dark transition-all duration-300'>
            Work Inquiry
          </a>
        </div>

        <div className='flex flex-col items-center gap-2 mt-8'>
          <p className='font-body text-xs text-warm-gray tracking-wide'>mahfuza.molee@gmail.com</p>
          <p className='font-body text-xs text-warm-gray tracking-wide'>mahfuza.molee@grey.com</p>
        </div>

        {/* Social links */}
        <div className='flex items-center justify-center gap-8 mt-8'>
          {[
            { name: 'Instagram', href: '#' },
            { name: 'Behance', href: '#' },
            { name: 'Dribbble', href: '#' },
          ].map((social) => (
            <a
              key={social.name}
              href={social.href}
              className='font-body text-sm text-warm-gray hover:text-blush-dark transition-colors duration-300 tracking-wide'>
              {social.name}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
