import MaxWidthWrapper from "@/components/MaxWidhWrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import { ArrowDownToLine, CheckCircle, Leaf } from "lucide-react";
import Link from "next/link";

const perks = [
  {
    name: "Giao Hàng Tức Khắc",
    Icon: ArrowDownToLine,
    description: "Giao tài sản số vào email của bạn ngay sau khi thanh toán"
  },
  {
    name: "Đảm Bảo Chất Lượng",
    Icon: CheckCircle,
    description: "Mọi tài sản trên nền tảng GiaoDichVuiVe đều được đảm bảo chất lượng tuyệt đối. Không hài lòng? Hoàn trả trong 30 ngày, hoàn đủ tiền đã thanh toán."
  },
  {
    name: "Vì hành tinh này",
    Icon: Leaf,
    description: "GiaoDichVuiVe sẽ chi 1% doanh thu để ủng hộ các hộ nghèo lũ lụt miền Trung"
  },
]

export default function Home() {
  return (
  <>
  <MaxWidthWrapper>
    <div className='py-20 mx-auto text-center flex flex-col items-center max-w-3xl'>
      <h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl'>
        Nền tảng thị trường chất lượng cho{' '}
        <span className='text-blue-600'>
        tài sản số
        </span> của bạn.
        </h1>
        <p className='mt-6 text-lg max-w-prose text-muted-foreground'>Chào mừng đến với GiaoDichVuiVe. Mọi tài sản trên nền tảng này
          đều được xác nhận bởi đội ngũ của chúng tôi để đảm bảo 
          tiêu chuẩn chất lượng tốt nhất.
        </p>
        <div className='flex flex-col sm:flex-row gap-4 mt-6'>
          <Link href='/products' className={buttonVariants()}>
            Khám Phá Ngay
          </Link>
          <Button variant='ghost'>Nghĩa vụ của chúng tôi &rarr;</Button>
        </div>
    </div>

    {/* TODO: List products */}
  </MaxWidthWrapper>
  <section className='border-t border-gray-200 bg-gray-50'>
    <MaxWidthWrapper className='py-20'>
      <div className='grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:grap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0'>
        {perks.map((perk) => (
          <div key={perk.name} className='text-center md:flex md:items-start md:text-left lg:block lg:text-center'>
            <div className='md:flex-shrink-0 flex justify-center'>
              <div className='h-16 w-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-900'>
                {<perk.Icon className='w-1/3 h-1/3'/>}
              </div>
            </div>
            <div className='mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6'>
              <h3 className='text-base font-medium text-gray-900'>{perk.name}</h3>
              <p className='mt-3 text-sm text-muted-foreground'>
                {perk.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </MaxWidthWrapper>
  </section>

  </>
  )
}
