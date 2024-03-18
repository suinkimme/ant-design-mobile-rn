(self.webpackChunk_ant_design_react_native=self.webpackChunk_ant_design_react_native||[]).push([[2925],{41445:n=>{n.exports={content:["article",["p",["a",{title:null,href:"https://github.com/ant-design/ant-design-mobile-rn/blob/master/components/date-picker-view/demo/basic.tsx"},"Demo Source Code"]],["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">\'react\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> ScrollView<span class="token punctuation">,</span> Text <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'react-native\'</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> DatePickerView <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'@ant-design/react-native\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> DatePickerFilter <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'@ant-design/react-native/lib/date-picker/date-picker-utils\'</span>\n\n<span class="token keyword">const</span> now <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> <span class="token punctuation">[</span>value<span class="token punctuation">,</span> setValue<span class="token punctuation">]</span> <span class="token operator">=</span> useState<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Date</span><span class="token punctuation">></span></span><span class="token punctuation">(</span>now<span class="token punctuation">)</span>\n\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ScrollView</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Text</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> margin<span class="token punctuation">:</span> <span class="token number">16</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>基础用法<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Text</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>DatePickerView</span> <span class="token attr-name">defaultValue</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>now<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Text</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> margin<span class="token punctuation">:</span> <span class="token number">16</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>受控模式<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Text</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>DatePickerView</span>\n        <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>value<span class="token punctuation">}</span></span>\n        <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n          <span class="token function">setValue</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span>\n          console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'onChange\'</span><span class="token punctuation">,</span> val<span class="token punctuation">)</span>\n        <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n      <span class="token punctuation">/></span></span>\n\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Text</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> margin<span class="token punctuation">:</span> <span class="token number">16</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>自定义每列的渲染内容<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Text</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>DatePickerView</span> <span class="token attr-name">defaultValue</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>now<span class="token punctuation">}</span></span> <span class="token attr-name">renderLabel</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>labelRenderer<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Text</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> margin<span class="token punctuation">:</span> <span class="token number">16</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>周选择器<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Text</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>DatePickerView</span>\n        <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'onChange\'</span><span class="token punctuation">,</span> val<span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n        <span class="token attr-name">precision</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>week-day<span class="token punctuation">"</span></span>\n        <span class="token attr-name">defaultValue</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>now<span class="token punctuation">}</span></span>\n        <span class="token attr-name">renderLabel</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>weekdayLabelRenderer<span class="token punctuation">}</span></span>\n      <span class="token punctuation">/></span></span>\n\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Text</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> margin<span class="token punctuation">:</span> <span class="token number">16</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>过滤可供选择的时间<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Text</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>DatePickerView</span>\n        <span class="token attr-name">defaultValue</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>now<span class="token punctuation">}</span></span>\n        <span class="token attr-name">precision</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>hour<span class="token punctuation">"</span></span>\n        <span class="token attr-name">renderLabel</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>labelRenderer<span class="token punctuation">}</span></span>\n        <span class="token attr-name">filter</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>dateFilter<span class="token punctuation">}</span></span>\n      <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ScrollView</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">const</span> labelRenderer <span class="token operator">=</span> <span class="token punctuation">(</span>type<span class="token punctuation">:</span> string<span class="token punctuation">,</span> data<span class="token punctuation">:</span> number<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n  <span class="token keyword">switch</span> <span class="token punctuation">(</span>type<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">case</span> <span class="token string">\'year\'</span><span class="token punctuation">:</span>\n      <span class="token keyword">return</span> data <span class="token operator">+</span> <span class="token string">\'年\'</span>\n    <span class="token keyword">case</span> <span class="token string">\'month\'</span><span class="token punctuation">:</span>\n      <span class="token keyword">return</span> data <span class="token operator">+</span> <span class="token string">\'月\'</span>\n    <span class="token keyword">case</span> <span class="token string">\'day\'</span><span class="token punctuation">:</span>\n      <span class="token keyword">return</span> data <span class="token operator">+</span> <span class="token string">\'日\'</span>\n    <span class="token keyword">case</span> <span class="token string">\'hour\'</span><span class="token punctuation">:</span>\n      <span class="token keyword">return</span> data <span class="token operator">+</span> <span class="token string">\'时\'</span>\n    <span class="token keyword">case</span> <span class="token string">\'minute\'</span><span class="token punctuation">:</span>\n      <span class="token keyword">return</span> data <span class="token operator">+</span> <span class="token string">\'分\'</span>\n    <span class="token keyword">case</span> <span class="token string">\'second\'</span><span class="token punctuation">:</span>\n      <span class="token keyword">return</span> data <span class="token operator">+</span> <span class="token string">\'秒\'</span>\n    <span class="token keyword">default</span><span class="token punctuation">:</span>\n      <span class="token keyword">return</span> data\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">const</span> weekdayLabelRenderer <span class="token operator">=</span> <span class="token punctuation">(</span>type<span class="token punctuation">:</span> string<span class="token punctuation">,</span> data<span class="token punctuation">:</span> number<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n  <span class="token keyword">switch</span> <span class="token punctuation">(</span>type<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">case</span> <span class="token string">\'year\'</span><span class="token punctuation">:</span>\n      <span class="token keyword">return</span> data <span class="token operator">+</span> <span class="token string">\'年\'</span>\n    <span class="token keyword">case</span> <span class="token string">\'week\'</span><span class="token punctuation">:</span>\n      <span class="token keyword">return</span> data <span class="token operator">+</span> <span class="token string">\'周\'</span>\n    <span class="token keyword">case</span> <span class="token string">\'week-day\'</span><span class="token punctuation">:</span>\n      <span class="token keyword">return</span> <span class="token function">weekdayToZh</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>\n    <span class="token keyword">default</span><span class="token punctuation">:</span>\n      <span class="token keyword">return</span> data\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">const</span> dateFilter<span class="token punctuation">:</span> DatePickerFilter <span class="token operator">=</span> <span class="token punctuation">{</span>\n  day<span class="token punctuation">:</span> <span class="token punctuation">(</span>val<span class="token punctuation">,</span> <span class="token punctuation">{</span> date <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    <span class="token comment" spellcheck="true">// 去除所有周末</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>date<span class="token punctuation">.</span><span class="token function">getDay</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">></span> <span class="token number">5</span> <span class="token operator">||</span> date<span class="token punctuation">.</span><span class="token function">getDay</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">return</span> <span class="token boolean">false</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword">return</span> <span class="token boolean">true</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  hour<span class="token punctuation">:</span> <span class="token punctuation">(</span>val<span class="token punctuation">:</span> number<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    <span class="token comment" spellcheck="true">// 只保留每天的14点到18点</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>val <span class="token operator">&lt;</span> <span class="token number">14</span> <span class="token operator">||</span> val <span class="token operator">></span> <span class="token number">18</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">return</span> <span class="token boolean">false</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword">return</span> <span class="token boolean">true</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">const</span> weekdayToZh <span class="token operator">=</span> <span class="token punctuation">(</span>weekday<span class="token punctuation">:</span> number<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n  <span class="token keyword">switch</span> <span class="token punctuation">(</span>weekday<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">case</span> <span class="token number">1</span><span class="token punctuation">:</span>\n      <span class="token keyword">return</span> <span class="token string">\'周一\'</span>\n    <span class="token keyword">case</span> <span class="token number">2</span><span class="token punctuation">:</span>\n      <span class="token keyword">return</span> <span class="token string">\'周二\'</span>\n    <span class="token keyword">case</span> <span class="token number">3</span><span class="token punctuation">:</span>\n      <span class="token keyword">return</span> <span class="token string">\'周三\'</span>\n    <span class="token keyword">case</span> <span class="token number">4</span><span class="token punctuation">:</span>\n      <span class="token keyword">return</span> <span class="token string">\'周四\'</span>\n    <span class="token keyword">case</span> <span class="token number">5</span><span class="token punctuation">:</span>\n      <span class="token keyword">return</span> <span class="token string">\'周五\'</span>\n    <span class="token keyword">case</span> <span class="token number">6</span><span class="token punctuation">:</span>\n      <span class="token keyword">return</span> <span class="token string">\'周六\'</span>\n    <span class="token keyword">case</span> <span class="token number">7</span><span class="token punctuation">:</span>\n      <span class="token keyword">return</span> <span class="token string">\'周日\'</span>\n    <span class="token keyword">default</span><span class="token punctuation">:</span>\n      <span class="token keyword">return</span> weekday\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>'},["code","import React from 'react';\nimport { ScrollView, Text } from 'react-native'\nimport { DatePickerView } from '@ant-design/react-native';\nimport { DatePickerFilter } from '@ant-design/react-native/lib/date-picker/date-picker-utils'\n\nconst now = new Date()\n\nexport default () => {\n  const [value, setValue] = useState<Date>(now)\n\n  return (\n    <ScrollView>\n      <Text style={{ margin: 16 }}>基础用法</Text>\n      <DatePickerView defaultValue={now} />\n\n      <Text style={{ margin: 16 }}>受控模式</Text>\n      <DatePickerView\n        value={value}\n        onChange={(val) => {\n          setValue(val)\n          console.log('onChange', val)\n        }}\n      />\n\n      <Text style={{ margin: 16 }}>自定义每列的渲染内容</Text>\n      <DatePickerView defaultValue={now} renderLabel={labelRenderer} />\n\n      <Text style={{ margin: 16 }}>周选择器</Text>\n      <DatePickerView\n        onChange={(val) => console.log('onChange', val)}\n        precision=\"week-day\"\n        defaultValue={now}\n        renderLabel={weekdayLabelRenderer}\n      />\n\n      <Text style={{ margin: 16 }}>过滤可供选择的时间</Text>\n      <DatePickerView\n        defaultValue={now}\n        precision=\"hour\"\n        renderLabel={labelRenderer}\n        filter={dateFilter}\n      />\n    </ScrollView>\n  )\n}\n\nconst labelRenderer = (type: string, data: number) => {\n  switch (type) {\n    case 'year':\n      return data + '年'\n    case 'month':\n      return data + '月'\n    case 'day':\n      return data + '日'\n    case 'hour':\n      return data + '时'\n    case 'minute':\n      return data + '分'\n    case 'second':\n      return data + '秒'\n    default:\n      return data\n  }\n}\n\nconst weekdayLabelRenderer = (type: string, data: number) => {\n  switch (type) {\n    case 'year':\n      return data + '年'\n    case 'week':\n      return data + '周'\n    case 'week-day':\n      return weekdayToZh(data)\n    default:\n      return data\n  }\n}\n\nconst dateFilter: DatePickerFilter = {\n  day: (val, { date }) => {\n    // 去除所有周末\n    if (date.getDay() > 5 || date.getDay() === 0) {\n      return false\n    }\n    return true\n  },\n  hour: (val: number) => {\n    // 只保留每天的14点到18点\n    if (val < 14 || val > 18) {\n      return false\n    }\n    return true\n  },\n}\n\nconst weekdayToZh = (weekday: number) => {\n  switch (weekday) {\n    case 1:\n      return '周一'\n    case 2:\n      return '周二'\n    case 3:\n      return '周三'\n    case 4:\n      return '周四'\n    case 5:\n      return '周五'\n    case 6:\n      return '周六'\n    case 7:\n      return '周日'\n    default:\n      return weekday\n  }\n}"]]],meta:{order:0,title:{"zh-CN":"基本","en-US":"Basic"},filename:"components/date-picker-view/demo/basic.md"}}},89978:(n,a,s)=>{n.exports={basic:s(41445)}}}]);