import{_ as g}from"./BasicTable.vue_vue_type_script_setup_true_lang-jwRietvD.js";import"./TableImg.vue_vue_type_style_index_0_lang-CLOyFFuc.js";import{_ as C}from"./index-Dkr6VmKA.js";import{u as x}from"./useTable-DZYBWrF0.js";import{d as k}from"./system-Dec80otj.js";import{u as w}from"./index-CNcCxeLf.js";import{_ as y,c as T,s as S}from"./MenuDrawer.vue_vue_type_script_setup_true_lang-CNqjDkEn.js";import{d as R,a7 as D,Z as a,_ as v,k as o,a9 as r,G as B,a8 as F,u as e,ab as M,y as N}from"./vue-BjERyvPm.js";import"./BasicForm.vue_vue_type_script_setup_true_lang-pWatLDmD.js";import"./FormItem.vue_vue_type_script_lang-BlYZUeGm.js";import"./componentMap-D7_wXCrD.js";import"./useFormItem-B4KjxddK.js";import"./antd-BmrhB3rb.js";import"./entry/index-DShbtsWl.js";import"./RadioButtonGroup.vue_vue_type_script_setup_true_lang-DHk6Ws1t.js";import"./index-M4UvXH9o.js";import"./IconPicker.vue_vue_type_script_setup_true_lang-D6Hk7opE.js";import"./copyTextToClipboard-DUmgQPO1.js";import"./index-BO8b0fR2.js";import"./index-Dy3692QU.js";import"./index-wJ08BCMi.js";import"./useWindowSizeFn-Cuml40XT.js";import"./base64Conver-bBv-IO2K.js";import"./helper-3Z_qR1GZ.js";import"./BasicForm.vue_vue_type_style_index_0_lang-CcmMJY8X.js";import"./useForm-DDSjB-3j.js";import"./uuid-D0SLUWHI.js";import"./sortable.esm-CoO8jRpa.js";import"./onMountedOrActivated-DcvTUt7V.js";import"./useSortable-JDCtAH92.js";import"./download-D1UiuoyS.js";const ue=R({name:"MenuManagement",__name:"index",setup(V){const[s,{openDrawer:i}]=w(),[m,{reload:l,expandAll:c}]=x({title:"菜单列表",api:k,columns:T,formConfig:{labelWidth:120,schemas:S},isTreeTable:!0,pagination:!1,striped:!1,useSearchForm:!0,showTableSetting:!0,bordered:!0,showIndexColumn:!1,canResize:!1,actionColumn:{width:80,title:"操作",dataIndex:"action",fixed:void 0}});function p(){i(!0,{isUpdate:!1})}function u(t){i(!0,{record:t,isUpdate:!0})}function d(t){}function f(){l()}function _(){N(c)}return(t,$)=>{const h=D("a-button");return a(),v("div",null,[o(e(g),{onRegister:e(m),onFetchSuccess:_},{toolbar:r(()=>[o(h,{type:"primary",onClick:p},{default:r(()=>[B(" 新增菜单 ")]),_:1})]),bodyCell:r(({column:b,record:n})=>[b.key==="action"?(a(),F(e(C),{key:0,actions:[{icon:"clarity:note-edit-line",onClick:u.bind(null,n)},{icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"是否确认删除",placement:"left",confirm:d.bind(null,n)}}]},null,8,["actions"])):M("",!0)]),_:1},8,["onRegister"]),o(y,{onRegister:e(s),onSuccess:f},null,8,["onRegister"])])}}});export{ue as default};