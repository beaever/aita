export default function Footer() {
  return (
    <footer className='border-t border-white/10 py-16 mt-32'>
      <div className='container mx-auto px-8 md:px-16 lg:px-20 xl:px-24'>
        <div className='flex flex-col md:flex-row justify-between items-center gap-6'>
          <div className='text-sm text-white/50 font-medium'>
            {new Date().getFullYear()} Sila Sveta. All rights reserved.
          </div>

          <div className='flex gap-8 text-sm font-medium'>
            <a
              href='#'
              className='text-white/50 hover:text-white transition-colors'
            >
              Instagram
            </a>
            <a
              href='#'
              className='text-white/50 hover:text-white transition-colors'
            >
              Facebook
            </a>
            <a
              href='#'
              className='text-white/50 hover:text-white transition-colors'
            >
              Vimeo
            </a>
            <a
              href='#'
              className='text-white/50 hover:text-white transition-colors'
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
