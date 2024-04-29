export default function page() {
  return (
    <div className=" w-2/3 flex flex-col gap-4 justify-center items-center ">
      <div className="w-48 h-48 rounded-full bg-white"></div>
      <h2 className="font-semibold text-xl text-red-100">
        안녕하세요 <span>박혜원</span>입니다.
      </h2>
      <div className="w-auto p-4 bg-slate-900 rounded-md">
        <ul className="flex flex-col gap-3 text-white">
          <ol>1. React, Vue js 활용한 실무 적용 경험이 있습니다.</ol>
          <li className="pl-6">Vue js 실무 경험 (2년)</li>
          <li className="pl-6"> React 팀프로젝트 + 실무 (1년)</li>
          <ol>2. **협업**을 중요하게 생각합니다.</ol>
          <li className="pl-6">
            함께 성장해 나갈 수 있는 환경을 만드는 것을 좋아합니다.
          </li>
          <li className="pl-6">
            팀프로젝트에서 코드 컨벤션을 eslint-plugin으로 만들어 적용한 경험이
            있습니다.
          </li>
          <li className="pl-6">
            스프린트 환경에서의 프론트엔드 개발 가능한 환경을 만들기 위해 msw를
            활용하여, 개발 시간을 줄인 경험이 있습니다.
          </li>
        </ul>
      </div>
    </div>
  );
}
