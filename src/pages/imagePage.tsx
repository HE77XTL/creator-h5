import Image from 'next/image';
import profilePic from '@/src/common/images/avator.png';

export default function imagePage() {
  return <div>
    <h3>image Page</h3>
    <Image src={profilePic} alt="avator" width={200}/>
  </div>;
}
