import Image from 'next/image'
import signup from '@/public/entre-sierras/7.jpg'
import logo from '@/public/uinta-logo.png'
import styles from './styles.module.css'

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.authContainer}>
      {/* Left side - Dynamic content */}
      <div className="w-full lg:w-1/2 bg-white flex items-center justify-center p-12">
        <div className="max-w-md w-full space-y-8">
          {children}
        </div>
      </div>
      
      {/* Right side - Static content */}
      <div className="hidden lg:block w-1/2 bg-black relative overflow-hidden">
        <div className="absolute inset-0 -top-1/4">
          <Image 
            src={signup} 
            alt='Scenic mountain view'
            className="w-full h-full object-cover"
            priority
          />
        </div>
        <div className="absolute top-0 left-0 w-full p-8 flex justify-center">
          <Image 
            src={logo} 
            alt="Uinta logo" 
            width={400} 
            height={128} 
            className="object-contain"
          />
        </div>
      </div>
    </div>
  )
}