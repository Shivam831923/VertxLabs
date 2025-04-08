import { FaLinkedin, FaEnvelope, FaTwitter, FaUser } from "react-icons/fa"
import { MdVerified } from "react-icons/md"
import Header from "../header/Header"

function Profile() {
  return (
    <div className="flex flex-col w-[100%]">
      <Header />

    <div className="flex-1 bg-[#1D1D1D] flex flex-col gap-5  p-4 md:p-[50px] pb-20 md:pb-[50px] box-border">
      <div className="text-white text-2xl md:text-3xl font-manrope font-extrabold text-[28px] leading-none tracking-[-0.04em]">Overview</div>

      <div className="w-full bg-black rounded-lg flex flex-col md:flex-row border border-gray-500 text-white p-4">
        <div className="w-full md:w-[200px] flex justify-center mb-4 md:mb-0">
          <div className="w-[120px] h-[120px] rounded-full bg-gray-200 flex items-center justify-center">
            <FaUser className="text-black text-5xl" />
          </div>
        </div>
        <div className="flex flex-col justify-center text-center md:text-left">
          <div className="flex flex-col gap-2 mb-4">
            <h2 className="w-full text-2xl md:text-3xl flex items-center justify-center md:justify-start gap-2 font-manrope font-bold text-[24px] leading-[100%] tracking-[0%]">
              Mr A <MdVerified className="text-blue-500" />
            </h2>
            <p className="text-white font-manrope font-medium text-[12px] leading-[100%] tracking-[0%]">Co-Founder & CEO @Vertx</p>
            <div className="flex justify-center md:justify-start">
              <span className="text-sm bg-white text-black rounded px-2 py-1 font-jetbrains-mono font-medium text-[8px] leading-[100%] tracking-[0%]">Entrepreneur</span>
            </div>
          </div>
          <div className="flex gap-2 mt-4 justify-center md:justify-start">
  <img
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRokEYt0yyh6uNDKL8uksVLlhZ35laKNQgZ9g&s"
    alt="LinkedIn"
    className="w-10 h-10 object-contain"
  />
  <img
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj-X06O3ppyMhQotOP_Km27fpwe0FgZGqXiA&s"
    alt="Twitter"
    className="w-10 h-10 object-contain"
  />
  <img
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS_EcxU7xMwW6Fj9rOB6qJdCCwJsnt9lhePoqIWekgWVRZsmFWVRkZtgtShhYXtNC7dP4&usqp=CAU"
    alt="Email"
    className="w-10 h-10 object-contain"
  />
</div>

        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-5">
        <div className="w-full md:w-[49%] bg-black rounded-lg border border-gray-500 p-5 text-white">
          <h2 className="font-manrope font-extrabold text-[18px] leading-[100%] tracking-[0%] mb-5">Founded Companies</h2>
          <h3 className="text-6xl md:text-7xl font-manrope font-bold text-[64px] leading-[100%] tracking-[0%]">02</h3>

          <div className="mt-5">
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-white rounded flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-6 h-6 text-black" fill="currentColor">
                    <path d="M12 2L2 12h5v10h10V12h5L12 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-manrope font-bold text-[14px] leading-[100%] tracking-[0%] flex flex-wrap items-center gap-2">
                    Vertx
                    <span className="bg-green-400 text-xs px-2 py-0.5 rounded">CEO</span>
                  </h4>
                  <p className="font-manrope text-[10px] leading-[100%] tracking-[0%]">
                    Founded in 2025, in <span className="font-manrope font-extrabold text-[10px] leading-[100%] tracking-[0%]">Fintech</span>.
                  </p>
                </div>
              </div>
              <p className="text-white cursor-pointer text-xs font-manrope font-medium text-[8px] leading-none tracking-normal">View Profile</p>
            </div>
          </div>

          {/* Company 2 */}
          <div className="mt-3">
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-white rounded"></div>
                <div>
                  <h4 className="text-lg font-manrope font-bold text-[14px] leading-[100%] tracking-[0%] flex flex-wrap items-center gap-2">
                    Company
                    <span className="bg-[#B1BDEB]  font-jetbrains-mono text-[#10074F] font-medium text-[8px] leading-[100%] tracking-[-0.04em] text-xs px-2 py-0.5 rounded">PROPRIETOR</span>
                  </h4>
                  <p className="font-manrope font-semibold text-[10px] leading-none tracking-normal">Details/information </p>
                  <p className="font-manrope font-semibold text-[10px] leading-none tracking-normal">like acquired /exit/m&a </p>
                </div>
              </div>
              <p className="text-white cursor-pointer text-xs font-manrope font-medium text-[8px] leading-none tracking-normal">View Profile</p>
            </div>
          </div>
        </div>

        <div className="w-full md:w-[49%] bg-black rounded-lg border border-gray-500 p-5 text-white">
          <h2 className="text-2xl font-manrope font-extrabold text-[18px] leading-[100%] tracking-[0%] mb-5">Experience</h2>
          <h3 className="text-6xl md:text-7xl font-manrope font-semibold text-4xl leading-none tracking-normal">03</h3>

          <div className="mt-5">
            <div className="flex items-center w-full gap-2">
              <div className="w-10 h-10 bg-white rounded"></div>
              <p className="text-lg font-manrope font-semibold text-sm leading-none tracking-normal">Company 1</p>
              <div className="ml-auto text-xs font-manrope font-medium text-[8px] leading-none tracking-normal">View Profile</div>
            </div>
          </div>

          <div className="mt-5">
            <div className="flex items-center w-full gap-2">
              <div className="w-10 h-10 bg-white rounded"></div>
              <p className="text-lg font-manrope font-semibold text-sm leading-none tracking-normal">Company 2</p>
              <div className="ml-auto text-xs font-manrope font-medium text-[8px] leading-none tracking-normal">View Profile</div>
            </div>
          </div>

          <div className="mt-5">
            <div className="flex items-center w-full gap-2">
              <div className="w-10 h-10 bg-white rounded"></div>
              <p className="text-lg font-manrope font-semibold text-sm leading-none tracking-normal">Company 3</p>
              <div className="ml-auto text-xs font-manrope font-medium text-[8px] leading-none tracking-normal">View Profile</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Profile


